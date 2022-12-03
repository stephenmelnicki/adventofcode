import path from "path";
import fs from "fs";

import { score, results, rounds, decrypt, chooseShapes } from "./tournament";

function main(): void {
  const contents: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 2: Rock Paper Scissors ---\n");

  const total = score(results(rounds(contents)));
  console.log(`Total score: ${total}`);

  const recalculatedTotal = score(chooseShapes(decrypt(contents)));
  console.log(`Recalculated total score: ${recalculatedTotal}`);
}

main();
