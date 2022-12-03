const scoreList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class Rucksack {
  contents: string;

  constructor(contents: string) {
    this.contents = contents;
  }

  get compartments(): [string, string] {
    const index = this.contents.length / 2;
    return [this.contents.slice(0, index), this.contents.slice(index)];
  }

  get sharedItem(): string | undefined {
    const [left, right] = this.compartments;

    return left.split("").reduce((shared, item) => {
      return right.includes(item) ? item : shared;
    }, undefined as string | undefined);
  }

  get score(): number {
    if (this.sharedItem === undefined) {
      return 0;
    }

    return scoreList.indexOf(this.sharedItem) + 1;
  }
}

export function rucksacks(input: string): Rucksack[] {
  return input
    .split("\n")
    .slice(0, -1) // trim last empty line
    .map((line) => new Rucksack(line));
}

export function totalScore(rucksacks: Rucksack[]): number {
  return rucksacks.reduce((total, rucksack) => total + rucksack.score, 0);
}

export class Group {
  rucksacks: Rucksack[];

  constructor(contents: string[]) {
    this.rucksacks = contents.map((str) => new Rucksack(str));
  }

  get sharedItem(): string | undefined {
    return this.rucksacks.slice(0, 1).reduce((_, rucksack) => {
      return rucksack.contents.split("").reduce((shared, item) => {
        return this.rucksacks
          .slice(1)
          .every((ruck) => ruck.contents.includes(item))
          ? item
          : shared;
      }, undefined as string | undefined);
    }, undefined as string | undefined);
  }

  get score(): number {
    if (this.sharedItem === undefined) {
      return 0;
    }

    return scoreList.indexOf(this.sharedItem) + 1;
  }
}

export function groups(input: string, size = 3): Group[] {
  const lines = input.split("\n").slice(0, -1);

  const groups: Group[] = [];
  for (let index = 0; index < lines.length; index = index + size) {
    const group = new Group(lines.slice(index, index + size));
    groups.push(group);
  }

  return groups;
}

export function groupScore(groups: Group[]): number {
  return groups.reduce((total, group) => total + group.score, 0);
}
