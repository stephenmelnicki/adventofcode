export function segment(input: string): number[][] {
  return input
    .split("\n\n")
    .map((str) => str.split("\n").filter((str) => str.length > 0))
    .map((list) => list.map((item) => Number(item)));
}

export function sums(lists: number[][]): number[] {
  return lists.map((list) => list.reduce((total, value) => total + value, 0));
}

export function maximum(list: number[]): number {
  return list.reduce((max, value) => (value > max ? value : max), 0);
}

export function topThree(list: number[]): number[] {
  return list.sort((a, b) => b - a).slice(0, 3);
}

export function total(list: number[]): number {
  return list.reduce((total, value) => total + value, 0);
}
