// import * as path from "std/path/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import { isCommand } from "./size.ts";

// const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));
// const testdataDir = path.resolve(moduleDir, "testdata");

// const input = Deno.readTextFileSync(
//   path.join(testdataDir, "output.txt"),
// );

// const lines = input.split("\n").slice(0, -1);

Deno.test("isCommand", () => {
  assertEquals(isCommand("$ cd /"), true);
  assertEquals(isCommand("$ ls"), true);
  assertEquals(isCommand("die a"), false);
});
