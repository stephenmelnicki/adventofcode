import path from "path";
import fs from "fs";

import {
  Pair,
  pairs,
  fullOverlap,
  partialOverlap,
  count,
} from "../assignments";

const input = fs.readFileSync(path.join(__dirname, "./pairs.txt"), {
  encoding: "utf8",
});

test("pairs", () => {
  const result = pairs(input);
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

  expect(result).toEqual(expected);
});

test("overlap", () => {
  const result = fullOverlap(pairs(input));
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

  expect(result).toEqual(expected);
});

test("partialOverlap", () => {
  const result = partialOverlap(pairs(input));
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

  expect(result).toEqual(expected);
});

test("count", () => {
  const result = count(fullOverlap(pairs(input)));
  const expected = 2;

  expect(result).toEqual(expected);
});
