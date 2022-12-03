import path from "path";
import fs from "fs";

import { score, results, rounds, decrypt, shapes } from "./tournament";

function main(): void {
  const contents: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  const total = score(results(rounds(contents)));
  console.log(`Total score: ${total}`);

  const recalculatedTotal = score(shapes(decrypt(contents)));
  console.log(`Recalculated total score: ${recalculatedTotal}`);
}

main();
