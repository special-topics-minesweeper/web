export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const GAME_SIZE = {
  [Difficulty.EASY]: {
    width: 9,
    height: 9,
    bombs: 10,
  },
  [Difficulty.MEDIUM]: {
    width: 16,
    height: 16,
    bombs: 40,
  },
  [Difficulty.HARD]: {
    width: 30,
    height: 16,
    bombs: 99,
  }
}

export enum GAME_STATUS {
  WIN = 'win',
  LOSE = 'lose',
  PENDING = 'pending',
}
