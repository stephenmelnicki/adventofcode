import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import {
  count,
  fullOverlap,
  Pair,
  pairs,
  partialOverlap,
} from "./assignments.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const input = Deno.readTextFileSync(
  path.join(testdataDir, "pairs.txt"),
);

Deno.test("pairs", () => {
  const actual = pairs(input);
  const expected: Pair[] = [
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];

  assertEquals(actual, expected);
});

Deno.test("overlap", () => {
  const actual = fullOverlap(pairs(input));
  const expected = [
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
  ];

  assertEquals(actual, expected);
});

Deno.test("partialOverlap", () => {
  const actual = partialOverlap(pairs(input));
  const expected = [
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];

  assertEquals(actual, expected);
});

Deno.test("count", () => {
  const actual = count(fullOverlap(pairs(input)));
  const expected = 2;

  assertEquals(actual, expected);
});
