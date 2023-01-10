import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import { count, fullOverlap, pairs, partialOverlap } from "./assignments.ts";

async function main() {
  console.log("--- Day 4: Camp Cleanup ---\n");

  const input = await fetchPuzzleInput(2022, 4);

  console.log(
    `Fully overlapping pairs count: ${count(fullOverlap(pairs(input)))}`,
  );
  console.log(
    `Partially overlapping pairs count: ${count(partialOverlap(pairs(input)))}`,
  );
}

if (import.meta.main) {
  main();
}
