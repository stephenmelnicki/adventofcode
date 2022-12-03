import path from "path";
import fs from "fs";

import {
  Shape,
  Round,
  Outcome,
  Result,
  rounds,
  results,
  score,
  decrypt,
  shapes,
} from "../tournament";

const input = fs.readFileSync(
  path.join(__dirname, "../__fixtures__/guide.txt"),
  { encoding: "utf8" }
);

test("rounds", () => {
  const result = rounds(input);
  const expected: Round[] = [
    [Shape.Rock, Shape.Paper],
    [Shape.Paper, Shape.Rock],
    [Shape.Scissors, Shape.Scissors],
  ];

  expect(result).toEqual(expected);
});

test("results", () => {
  const result = results(rounds(input));
  const expected: Result[] = [
    [Shape.Paper, Outcome.Win],
    [Shape.Rock, Outcome.Loss],
    [Shape.Scissors, Outcome.Draw],
  ];

  expect(result).toEqual(expected);
});

test("score", () => {
  const result = score(results(rounds(input)));
  const expected = 15;

  expect(result).toEqual(expected);
});

test("decrypt", () => {
  const result = decrypt(input);
  const expected: Result[] = [
    [Shape.Rock, Outcome.Draw],
    [Shape.Paper, Outcome.Loss],
    [Shape.Scissors, Outcome.Win],
  ];

  expect(result).toEqual(expected);
});

test("shapes", () => {
  const result = shapes(decrypt(input));
  const expected: Result[] = [
    [Shape.Rock, Outcome.Draw],
    [Shape.Rock, Outcome.Loss],
    [Shape.Rock, Outcome.Win],
  ];

  expect(result).toEqual(expected);
});
