import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import {
  chooseShapes,
  decrypt,
  Outcome,
  Result,
  results,
  Round,
  rounds,
  score,
  Shape,
} from "./tournament.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const input = Deno.readTextFileSync(
  path.join(testdataDir, "guide.txt"),
);

Deno.test("rounds", () => {
  const actual = rounds(input);
  const expected: Round[] = [
    [Shape.Rock, Shape.Paper],
    [Shape.Paper, Shape.Rock],
    [Shape.Scissors, Shape.Scissors],
  ];

  assertEquals(actual, expected);
});

Deno.test("results", () => {
  const actual = results(rounds(input));
  const expected: Result[] = [
    [Shape.Paper, Outcome.Win],
    [Shape.Rock, Outcome.Loss],
    [Shape.Scissors, Outcome.Draw],
  ];

  assertEquals(actual, expected);
});

Deno.test("score", () => {
  const actual = score(results(rounds(input)));
  const expected = 15;

  assertEquals(actual, expected);
});

Deno.test("decrypt", () => {
  const actual = decrypt(input);
  const expected: Result[] = [
    [Shape.Rock, Outcome.Draw],
    [Shape.Paper, Outcome.Loss],
    [Shape.Scissors, Outcome.Win],
  ];

  assertEquals(actual, expected);
});

Deno.test("chooseShapes", () => {
  const actual = chooseShapes(decrypt(input));
  const expected: Result[] = [
    [Shape.Rock, Outcome.Draw],
    [Shape.Rock, Outcome.Loss],
    [Shape.Rock, Outcome.Win],
  ];

  assertEquals(actual, expected);
});
