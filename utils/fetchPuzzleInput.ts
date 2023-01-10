import "std/dotenv/load.ts";
import { dirname } from "std/path/mod.ts";

const BASE_URL = "https://adventofcode.com";
const CACHE_DIR = "./.cache";
const AOC_SESSION_ID = Deno.env.get("AOC_SESSION_ID");

async function fetchFromCache(year: number, day: number): Promise<string> {
  const filepath = `${CACHE_DIR}/${year}/day/${day}/input`;
  return await Deno.readTextFile(filepath);
}

async function cacheResponse(response: Response): Promise<void> {
  const body = new Uint8Array(await response.arrayBuffer());

  const filepath = `${CACHE_DIR}/${response.url.slice(BASE_URL.length + 1)}`;
  await Deno.mkdir(dirname(filepath), { recursive: true });

  const file = await Deno.create(filepath);
  await file.write(body);
  file.close();
}

async function fetchFromUpstream(year: number, day: number): Promise<string> {
  const url = `${BASE_URL}/${year}/day/${day}/input`;
  const headers = new Headers();
  headers.append("Cookie", `session=${AOC_SESSION_ID}`);

  const response = await fetch(url, { headers });
  await cacheResponse(response);

  return fetchFromCache(year, day);
}

export async function fetchPuzzleInput(
  year: number,
  day: number,
): Promise<string> {
  try {
    return await fetchFromCache(year, day);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return await fetchFromUpstream(year, day);
    }

    throw err;
  }
}
