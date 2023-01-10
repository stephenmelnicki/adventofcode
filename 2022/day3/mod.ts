import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import { groups, groupScore, rucksacks, totalScore } from "./rucksack.ts";

async function main(): Promise<void> {
  console.log("--- Day 3: Rucksack Reorganization ---\n");

  const input = await fetchPuzzleInput(2022, 3);

  const total = totalScore(rucksacks(input));
  console.log(`Priorities total: ${total}`);

  const score = groupScore(groups(input));
  console.log(`Groups priorities total: ${score}`);
}

if (import.meta.main) {
  main();
}
