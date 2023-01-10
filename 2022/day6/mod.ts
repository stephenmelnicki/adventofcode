import { fetchPuzzleInput } from "utils/fetchPuzzleInput.ts";
import { messageMarker, packetMarker } from "./communicator.ts";

async function main() {
  console.log("--- Day 6: Tuning Trouble ---\n");

  const input = await fetchPuzzleInput(2022, 6);

  const packet = packetMarker(input);
  console.log("first start-of-packet marker: ", packet);

  const message = messageMarker(input);
  console.log("first start-of-message marker: ", message);
}

if (import.meta.main) {
  main();
}
