import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import {
  Group,
  groups,
  groupScore,
  Rucksack,
  rucksacks,
  totalScore,
} from "./rucksack.ts";

const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
const testdataDir = path.resolve(moduleDir, "testdata");

const input = Deno.readTextFileSync(
  path.join(testdataDir, "contents.txt"),
);

Deno.test("Rucksack: compartments", () => {
  const rucksack = new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp");
  assertEquals(rucksack.compartments, ["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
});

Deno.test("Rucksack: sharedItem", () => {
  const rucksack = new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp");
  assertEquals(rucksack.sharedItem, "p");
});

Deno.test("Rucksack: score", () => {
  const rucksack = new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp");
  assertEquals(rucksack.score, 16);
});

Deno.test("Group: sharedItem", () => {
  const group = new Group([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ]);

  assertEquals(group.sharedItem, "r");
});

Deno.test("Group: score", () => {
  const group = new Group([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ]);

  assertEquals(group.score, 18);
});

Deno.test("Rucksacks assembly", () => {
  const actual = rucksacks(input);
  const expected = [
    new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp"),
    new Rucksack("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"),
    new Rucksack("PmmdzqPrVvPwwTWBwg"),
    new Rucksack("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"),
    new Rucksack("ttgJtRGJQctTZtZT"),
    new Rucksack("CrZsJsPPZsGzwwsLwLmpwMDw"),
  ];

  assertEquals(actual, expected);
});

Deno.test("Rucksacks total score", () => {
  assertEquals(totalScore(rucksacks(input)), 157);
});

Deno.test("Groups assembly", () => {
  const actual = groups(input);
  const expected = [
    new Group([
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
    ]),
    new Group([
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ]),
  ];

  assertEquals(actual, expected);
});

Deno.test("Groups score", () => {
  assertEquals(groupScore(groups(input)), 70);
});
