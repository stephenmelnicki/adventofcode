export function segment(input: string): number[][] {
  return input
    .split("\n\n")
    .map((str) => str.split("\n"))
    .map((list) => list.map((item) => Number(item)));
}

export function combine(lists: number[][]): number[] {
  return lists.map((list) => total(list));
}

export function maximum(list: number[]): number {
  return Math.max(...list);
}

export function topThree(list: number[]): number[] {
  return list.sort((a, b) => b - a).slice(0, 3);
}

export function total(list: number[]): number {
  return list.reduce((total, value) => total + value, 0);
}
