import path from "path";
import fs from "fs";

import {
  stacks,
  instructions,
  rearrange,
  topCrates,
  rearrangeImproved,
} from "./stacks";

function main() {
  const input: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 5: Supply Stacks ---\n");

  const first = topCrates(rearrange(stacks(input), instructions(input)));
  console.log("Top crate on each stack: ", first);

  const second = topCrates(
    rearrangeImproved(stacks(input), instructions(input))
  );
  console.log("Top crates improved: ", second);
}

main();
