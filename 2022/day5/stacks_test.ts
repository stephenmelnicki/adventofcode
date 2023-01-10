import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import {
  instructions,
  rearrange,
  rearrangeImproved,
  stacks,
  topCrates,
} from "./stacks.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const input = Deno.readTextFileSync(
  path.join(testdataDir, "crates.txt"),
);

Deno.test("stacks", () => {
  const actual = stacks(input);
  const expected = [["Z", "N"], ["M", "C", "D"], ["P"]];

  assertEquals(actual, expected);
});

Deno.test("instructions", () => {
  const actual = instructions(input);
  const expected = [
    [1, 1, 0],
    [3, 0, 2],
    [2, 1, 0],
    [1, 0, 1],
  ];

  assertEquals(actual, expected);
});

Deno.test("rearrange", () => {
  const actual = rearrange(stacks(input), instructions(input));
  const expected = [["C"], ["M"], ["P", "D", "N", "Z"]];

  assertEquals(actual, expected);
});

Deno.test("rearrangeImproved", () => {
  const actual = rearrangeImproved(stacks(input), instructions(input));
  const expected = [["M"], ["C"], ["P", "Z", "N", "D"]];

  assertEquals(actual, expected);
});

Deno.test("topCrates", () => {
  const actual = topCrates(rearrange(stacks(input), instructions(input)));
  const expected = "CMZ";

  assertEquals(actual, expected);
});
