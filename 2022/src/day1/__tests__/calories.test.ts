import path from "path";
import fs from "fs";

import { segment, sums, maximum, topThree, total } from "../calories";

const input = fs.readFileSync(
  path.join(__dirname, "../__fixtures__/calories.txt"),
  { encoding: "utf8" }
);

test("segment", () => {
  const result = segment(input);
  const expected = [
    [1000, 2000, 3000], // 6000
    [4000], // 4000
    [5000, 6000], // 11000
    [7000, 8000, 9000], // 24000
    [10000], // 10000
  ];

  expect(result).toEqual(expected);
});

test("sums", () => {
  const result = sums(segment(input));
  const expected = [6000, 4000, 11000, 24000, 10000];

  expect(result).toEqual(expected);
});

test("maximum", () => {
  const result = maximum(sums(segment(input)));
  const expected = 24000;

  expect(result).toEqual(expected);
});

test("topThree", () => {
  const result = topThree(sums(segment(input)));
  const expected = [24000, 11000, 10000];

  expect(result).toEqual(expected);
});

test("total", () => {
  const result = total(topThree(sums(segment(input))));
  const expected = 45000;

  expect(result).toEqual(expected);
});
