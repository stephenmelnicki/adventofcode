import path from "path";
import fs from "fs";

import { rucksacks, totalScore, groups, groupScore } from "./rucksack";

function main(): void {
  const input: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 3: Rucksack Reorganization ---");

  const total = totalScore(rucksacks(input));
  console.log(`Priorities total: ${total}`);

  const score = groupScore(groups(input));
  console.log(`Groups priorities total: ${score}`);
}

main();
