import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import { combine, maximum, segment, topThree, total } from "./calories.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const data = Deno.readTextFileSync(
  path.join(testdataDir, "calories.txt"),
);

Deno.test("segment", () => {
  const actual = segment(data);
  const expected = [
    [1000, 2000, 3000],
    [4000],
    [5000, 6000],
    [7000, 8000, 9000],
    [10000],
  ];

  assertEquals(actual, expected);
});

Deno.test("combine", () => {
  const actual = combine(segment(data));
  const expected = [6000, 4000, 11000, 24000, 10000];

  assertEquals(actual, expected);
});

Deno.test("maximum", () => {
  const actual = maximum(combine(segment(data)));
  const expected = 24000;

  assertEquals(actual, expected);
});

Deno.test("topThree", () => {
  const actual = topThree(combine(segment(data)));
  const expected = [24000, 11000, 10000];

  assertEquals(actual, expected);
});

Deno.test("total", () => {
  const actual = total(topThree(combine(segment(data))));
  const expected = 45000;

  assertEquals(actual, expected);
});
