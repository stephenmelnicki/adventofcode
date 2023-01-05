import path from "path";
import fs from "fs";

import { isUnique, packetMarker, messageMarker } from "../communicator";

const input = fs.readFileSync(path.join(__dirname, "datastreams.txt"), {
  encoding: "utf8",
});

const lines = input.split("\n").slice(0, -1);

test("isUnique", () => {
  expect(isUnique("abcd".split(""))).toEqual(true);
  expect(isUnique("bbcd".split(""))).toEqual(false);
  expect(isUnique("xywz".split(""))).toEqual(true);
  expect(isUnique("xywzz".split(""))).toEqual(false);
});

test("packetMarker", () => {
  const result = lines.map((line) => packetMarker(line));
  expect(result).toEqual([7, 5, 6, 10, 11]);
});

test("messageMarker", () => {
  const result = lines.map((line) => messageMarker(line));
  expect(result).toEqual([19, 23, 23, 29, 26]);
});
