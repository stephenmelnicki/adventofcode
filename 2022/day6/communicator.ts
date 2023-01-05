export function isUnique(sequence: string[]): boolean {
  return sequence.every(
    (char, index, array) => !array.slice(index + 1).includes(char)
  );
}

export function packetMarker(stream: string): number {
  const index = stream.split("").findIndex((_, index, array) => {
    const segment = array.slice(index, index + 4);
    return segment.length === 4 && isUnique(segment);
  });

  return index < 0 ? index : index + 4;
}

export function messageMarker(stream: string): number {
  const index = stream.split("").findIndex((_, index, array) => {
    const segment = array.slice(index, index + 14);
    return segment.length === 14 && isUnique(segment);
  });

  return index < 0 ? index : index + 14;
}
