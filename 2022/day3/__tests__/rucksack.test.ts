import path from "path";
import fs from "fs";

import {
  Group,
  Rucksack,
  rucksacks,
  totalScore,
  groups,
  groupScore,
} from "../rucksack";

const input = fs.readFileSync(path.join(__dirname, "./contents.txt"), {
  encoding: "utf8",
});

describe("Rucksack", () => {
  const rucksack = new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp");

  it("compartments", () => {
    expect(rucksack.compartments).toEqual(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
  });

  it("sharedItem", () => {
    expect(rucksack.sharedItem).toEqual("p");
  });

  it("score", () => {
    expect(rucksack.score).toEqual(16);
  });
});

describe("Part one", () => {
  it("Rucksack assembly", () => {
    const result = rucksacks(input);
    const expected = [
      new Rucksack("vJrwpWtwJgWrhcsFMMfFFhFp"),
      new Rucksack("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"),
      new Rucksack("PmmdzqPrVvPwwTWBwg"),
      new Rucksack("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"),
      new Rucksack("ttgJtRGJQctTZtZT"),
      new Rucksack("CrZsJsPPZsGzwwsLwLmpwMDw"),
    ];

    expect(result).toEqual(expected);
  });

  it("Rucksack priority sum", () => {
    const result = totalScore(rucksacks(input));
    const expected = 157;

    expect(result).toEqual(expected);
  });
});

describe("Group", () => {
  const group = new Group([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ]);

  it("sharedItem", () => {
    expect(group.sharedItem).toEqual("r");
  });

  it("score", () => {
    expect(group.score).toEqual(18);
  });
});

describe("Part two", () => {
  it("Group assembly", () => {
    const result = groups(input);
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

    expect(result).toEqual(expected);
  });

  it("Group priority sum", () => {
    const result = groupScore(groups(input));
    const expected = 70;

    expect(result).toEqual(expected);
  });
});
