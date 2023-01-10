import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import { chooseShapes, decrypt, results, rounds, score } from "./tournament.ts";

async function main(): Promise<void> {
  console.log("--- Day 2: Rock Paper Scissors ---\n");

  const input = await fetchPuzzleInput(2022, 2);

  const total = score(results(rounds(input)));
  console.log(`Total score: ${total}`);

  const recalculatedTotal = score(chooseShapes(decrypt(input)));
  console.log(`Recalculated total score: ${recalculatedTotal}`);
}

if (import.meta.main) {
  main();
}
