import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import { isUnique, messageMarker, packetMarker } from "./communicator.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const input = Deno.readTextFileSync(
  path.join(testdataDir, "datastreams.txt"),
);

const lines = input.split("\n").slice(0, -1);

Deno.test("isUnique", () => {
  assertEquals(isUnique("abcd".split("")), true);
  assertEquals(isUnique("bbcd".split("")), false);
  assertEquals(isUnique("xywz".split("")), true);
  assertEquals(isUnique("xywzz".split("")), false);
});

Deno.test("packetMarker", () => {
  const actual = lines.map((line) => packetMarker(line));
  const expected = [7, 5, 6, 10, 11];
  assertEquals(actual, expected);
});

Deno.test("messageMarker", () => {
  const actual = lines.map((line) => messageMarker(line));
  const expected = [19, 23, 23, 29, 26];
  assertEquals(actual, expected);
});
