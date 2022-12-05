import path from "path";
import fs from "fs";

import { pairs, fullOverlap, count, partialOverlap } from "./assignments";

function main() {
  const input: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 4: Camp Cleanup ---\n");
  console.log(
    `Fully overlapping pairs count: ${count(fullOverlap(pairs(input)))}`
  );
  console.log(
    `Partially overlapping pairs count: ${count(partialOverlap(pairs(input)))}`
  );
}

main();
