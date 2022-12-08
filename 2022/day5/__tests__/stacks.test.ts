import path from "path";
import fs from "fs";

import {
  stacks,
  instructions,
  rearrange,
  topCrates,
  rearrangeImproved,
} from "../stacks";

const input: string = fs.readFileSync(path.join(__dirname, "crates.txt"), {
  encoding: "utf8",
});

test("stacks", () => {
  const result = stacks(input);
  const expected = [["Z", "N"], ["M", "C", "D"], ["P"]];

  expect(result).toEqual(expected);
});

test("instructions", () => {
  const result = instructions(input);
  const expected = [
    [1, 1, 0],
    [3, 0, 2],
    [2, 1, 0],
    [1, 0, 1],
  ];

  expect(result).toEqual(expected);
});

test("rearrange", () => {
  const result = rearrange(stacks(input), instructions(input));
  const expected = [["C"], ["M"], ["P", "D", "N", "Z"]];

  expect(result).toEqual(expected);
});

test("rearrangeImproved", () => {
  const result = rearrangeImproved(stacks(input), instructions(input));
  const expected = [["M"], ["C"], ["P", "Z", "N", "D"]];

  expect(result).toEqual(expected);
});

test("topCrates", () => {
  const result = topCrates(rearrange(stacks(input), instructions(input)));
  const expected = "CMZ";

  expect(result).toEqual(expected);
});
