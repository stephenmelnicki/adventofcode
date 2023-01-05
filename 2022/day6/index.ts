import path from "path";
import fs from "fs";

import { messageMarker, packetMarker } from "./communicator";

function main() {
  const input: string = fs.readFileSync(path.join(__dirname, "input.txt"), {
    encoding: "utf8",
  });

  console.log("--- Day 6: Tuning Trouble ---\n");

  const packet = packetMarker(input);
  console.log("first start-of-packet marker: ", packet);

  const message = messageMarker(input);
  console.log("first start-of-message marker: ", message);
}

main();
