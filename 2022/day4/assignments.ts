type Assignment = [number, number];

export type Pair = [Assignment, Assignment];

export function pairs(input: string): Pair[] {
  return input
    .split("\n")
    .slice(0, -1)
    .map((line) => {
      const [left, right] = line.split(",").map((assignment) => {
        return assignment.split("-").map((value) => Number(value));
      });

      return [left as Assignment, right as Assignment];
    });
}

export function fullOverlap(pairs: Pair[]): Pair[] {
  return pairs.filter(([left, right]) => {
    if (
      Math.min(...left) <= Math.min(...right) &&
      Math.max(...left) >= Math.max(...right)
    ) {
      return true;
    }

    if (
      Math.min(...right) <= Math.min(...left) &&
      Math.max(...right) >= Math.max(...left)
    ) {
      return true;
    }

    return false;
  });
}

export function partialOverlap(pairs: Pair[]): Pair[] {
  return pairs.filter(([left, right]) => {
    if (
      Math.min(...left) <= Math.min(...right) &&
      Math.max(...left) >= Math.min(...right)
    ) {
      return true;
    }

    if (
      Math.min(...right) <= Math.min(...left) &&
      Math.max(...right) >= Math.min(...left)
    ) {
      return true;
    }

    return false;
  });

  // TODO: Implement
  return pairs;
}

export function count(pairs: Pair[]): number {
  return pairs.length;
}
