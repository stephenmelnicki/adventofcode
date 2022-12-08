type Stack = string[];
type Instruction = [count: number, source: number, target: number];

function zip(arrays: string[][]): string[][] {
  const maxLength = Math.max(...arrays.map((x) => x.length));

  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (__, k) => arrays[k][i]);
  });
}

export function stacks(input: string): Stack[] {
  const lines = input
    .split("\n\n")
    .slice(0, 1)
    .reduce((list, str) => list.concat(str.split("\n")), [] as string[])
    .map((line) => line.split(""));

  return zip(lines)
    .map((column) => column.filter((char) => /[A-Z]/g.test(char)))
    .filter((column) => column.length > 0)
    .map((column) => column.reverse());
}

export function instructions(input: string): Instruction[] {
  return input
    .split("\n\n")
    .slice(-1)
    .reduce((list, str) => list.concat(str.split("\n")), [] as string[])
    .slice(0, -1) // trim last empty new line
    .map((line) => {
      const count = Number(line.slice(4, line.indexOf("from")).trim());
      const source =
        Number(
          line.slice(line.indexOf("from") + 4, line.indexOf("to")).trim()
        ) - 1;
      const target = Number(line.slice(line.indexOf("to") + 2).trim()) - 1;

      return [count, source, target] as Instruction;
    });
}

export function rearrange(
  stacks: Stack[],
  instructions: Instruction[]
): Stack[] {
  instructions.forEach((instruction) => {
    const [count, source, target] = instruction;

    Array.from({ length: count }).forEach(() => {
      const crate = stacks[source].pop();

      if (crate !== undefined) {
        stacks[target].push(crate);
      }
    });
  });

  return stacks;
}

export function rearrangeImproved(
  stacks: Stack[],
  instructions: Instruction[]
): Stack[] {
  instructions.forEach((instruction) => {
    const [count, source, target] = instruction;
    const index = Math.max(stacks[source].length - count, 0);

    const crates = stacks[source].slice(index);
    stacks[source] = stacks[source].slice(0, index);
    stacks[target] = stacks[target].concat(crates);
  });

  return stacks;
}

export function topCrates(stacks: Stack[]): string {
  return stacks.flatMap((stack) => stack.slice(-1)).join("");
}
