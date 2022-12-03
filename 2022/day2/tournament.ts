export enum Outcome {
  Loss = 0,
  Draw = 3,
  Win = 6,
}

export enum Shape {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

export type Round = [Shape, Shape];

export type Result = [Shape, Outcome];

const opponentMap = new Map<string, Shape>([
  ["A", Shape.Rock],
  ["B", Shape.Paper],
  ["C", Shape.Scissors],
]);

const playerMap = new Map<string, Shape>([
  ["X", Shape.Rock],
  ["Y", Shape.Paper],
  ["Z", Shape.Scissors],
]);

export function rounds(input: string): Round[] {
  return input
    .split("\n")
    .slice(0, -1) // remove last, empty new line
    .map((line) => {
      const [opponent, player] = line.split(" ");
      const opponentShape = opponentMap.get(opponent);
      const playerShape = playerMap.get(player);

      if (opponentShape === undefined || playerShape === undefined) {
        throw new Error(`Invalid line. ${line}`);
      }

      return [opponentShape, playerShape];
    });
}

const outcomeMap = new Map<string, Outcome>([
  [`${Shape.Rock},${Shape.Rock}`, Outcome.Draw],
  [`${Shape.Rock},${Shape.Paper}`, Outcome.Win],
  [`${Shape.Rock},${Shape.Scissors}`, Outcome.Loss],
  [`${Shape.Paper},${Shape.Rock}`, Outcome.Loss],
  [`${Shape.Paper},${Shape.Paper}`, Outcome.Draw],
  [`${Shape.Paper},${Shape.Scissors}`, Outcome.Win],
  [`${Shape.Scissors},${Shape.Rock}`, Outcome.Win],
  [`${Shape.Scissors},${Shape.Paper}`, Outcome.Loss],
  [`${Shape.Scissors},${Shape.Scissors}`, Outcome.Draw],
]);

export function results(rounds: Round[]): Result[] {
  return rounds.map((round) => {
    const outcome = outcomeMap.get(round.toString());

    if (outcome === undefined) {
      throw new Error(`Invalid round. ${round}`);
    }

    return [round[1], outcome];
  });
}

export function score(results: Result[]): number {
  return results.reduce((total, result) => total + result[0] + result[1], 0);
}

/// PART TWO

const desiredOutcomeMap = new Map<string, Outcome>([
  ["X", Outcome.Loss],
  ["Y", Outcome.Draw],
  ["Z", Outcome.Win],
]);

export function decrypt(input: string): Result[] {
  return input
    .split("\n")
    .slice(0, -1) // remove last, empty new line
    .map((line) => {
      const [opponent, outcome] = line.split(" ");
      const opponentShape = opponentMap.get(opponent);
      const desiredOutcome = desiredOutcomeMap.get(outcome);

      if (opponentShape === undefined || desiredOutcome === undefined) {
        throw new Error(`Invalid line. ${line}`);
      }

      return [opponentShape, desiredOutcome];
    });
}

const shapeMap = new Map<string, Shape>([
  [`${Shape.Rock},${Outcome.Loss}`, Shape.Scissors],
  [`${Shape.Rock},${Outcome.Draw}`, Shape.Rock],
  [`${Shape.Rock},${Outcome.Win}`, Shape.Paper],
  [`${Shape.Paper},${Outcome.Loss}`, Shape.Rock],
  [`${Shape.Paper},${Outcome.Draw}`, Shape.Paper],
  [`${Shape.Paper},${Outcome.Win}`, Shape.Scissors],
  [`${Shape.Scissors},${Outcome.Loss}`, Shape.Paper],
  [`${Shape.Scissors},${Outcome.Draw}`, Shape.Scissors],
  [`${Shape.Scissors},${Outcome.Win}`, Shape.Rock],
]);

export function chooseShapes(results: Result[]): Result[] {
  return results.map((result) => {
    const shape = shapeMap.get(result.toString());

    if (shape === undefined) {
      throw new Error(`Invalid result. ${result}`);
    }

    return [shape, result[1]];
  });
}
