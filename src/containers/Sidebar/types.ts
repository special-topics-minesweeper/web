import { Difficulty } from "../Game/types";

export interface ISidebar {
  difficulty: Difficulty;
  flagCount: number;
  gameStatus: string;
  onLevelSelect: (difficulty: Difficulty) => void;
  setData: any;
}
