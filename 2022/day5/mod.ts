import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import {
  instructions,
  rearrange,
  rearrangeImproved,
  stacks,
  topCrates,
} from "./stacks.ts";

async function main() {
  console.log("--- Day 5: Supply Stacks ---\n");

  const input = await fetchPuzzleInput(2022, 5);

  const first = topCrates(rearrange(stacks(input), instructions(input)));
  console.log("Top crate on each stack: ", first);

  const second = topCrates(
    rearrangeImproved(stacks(input), instructions(input)),
  );
  console.log("Top crates improved: ", second);
}

if (import.meta.main) {
  main();
}
