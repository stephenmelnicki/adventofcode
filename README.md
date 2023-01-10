# Advent of Code

[![codecov](https://codecov.io/gh/stephenmelnicki/adventofcode/branch/main/graph/badge.svg?token=JFSHAY5JAC)](https://codecov.io/gh/stephenmelnicki/adventofcode)

My TypeScript solutions to the Advent of Code puzzles.

Enjoy!

## Quickstart

Install [deno](https://deno.land/manual@v1.29.2/getting_started/installation).

Grab your session cookie after logging in to Advent of Code and save it to the
`.env` file. You can find the session id using your broswer's inspector.

```
AOC_SESSION_ID=keyboard_cat # replace with session id
```

After that, pick a year and day and run the corresponding solution. It will
print the answers to the console.

For example, to run the first day's solution (NOTE: the permissions are required
as the solution will attempt to download the puzzle input if it hasn't already
been cached):

```bash
deno run --allow-read --allow-write --allow-env --allow-net=adventofcode.com .\2022\day1\mod.ts
```
