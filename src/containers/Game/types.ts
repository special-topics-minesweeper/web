export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const GAME_SIZE = {
  [Difficulty.EASY]: {
    width: 9,
    height: 9,
  },
  [Difficulty.MEDIUM]: {
    width: 16,
    height: 16,
  },
  [Difficulty.HARD]: {
    width: 30,
    height: 16,
  }
}
