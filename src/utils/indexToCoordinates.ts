import { Difficulty, GAME_SIZE } from "../containers/Game/types";

const indexToCoordinates = (
  { index, difficulty }: { index: number, difficulty: Difficulty }
) => (
  [index % GAME_SIZE[difficulty].height, Math.floor(index / GAME_SIZE[difficulty].height)]
);

export default indexToCoordinates;
