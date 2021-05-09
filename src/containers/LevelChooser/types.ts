import { Difficulty } from "../Game/types";

export interface ILevelChooser {
  onSelect: (difficulty: Difficulty) => void;
}
