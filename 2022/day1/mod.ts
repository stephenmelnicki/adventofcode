import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import { combine, maximum, segment, topThree, total } from "./calories.ts";

async function main(): Promise<void> {
  console.log("--- Day 1: Calorie Counting ---\n");

  const input = await fetchPuzzleInput(2022, 1);

  const max = maximum(combine(segment(input)));
  console.log(`Maximum calories: ${max}`);

  const totalOfTopThree = total(topThree(combine(segment(input))));
  console.log(`Total calories of top three: ${totalOfTopThree}`);
}

if (import.meta.main) {
  main();
}
