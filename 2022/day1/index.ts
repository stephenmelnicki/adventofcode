import path from "path";
import fs from "fs";

import { maximum, segment, combine, topThree, total } from "./calories";

function main(): void {
  const contents: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 1: Calorie Counting ---\n");

  const max = maximum(combine(segment(contents)));
  console.log(`Maximum calories: ${max}`);

  const totalOfTopThree = total(topThree(combine(segment(contents))));
  console.log(`Total calories of top three: ${totalOfTopThree}`);
}

main();
