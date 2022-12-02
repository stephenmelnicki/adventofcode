import path from "path";
import fs from "fs";

import { maximum, segment, sums, topThree, total } from "./calories";

function main(): void {
  const contents: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  const max = maximum(sums(segment(contents)));
  console.log(`Maximum Calories: ${max}`);

  const totalOfTopThree = total(topThree(sums(segment(contents))));
  console.log(`Sum of top three: ${totalOfTopThree}`);
}

main();
