import { Difficulty, GAME_SIZE } from "../containers/Game/types";

const indexToCoordinates = (
  { index, difficulty }: { index: number, difficulty: Difficulty }
) => (
  [Math.floor(index / GAME_SIZE[difficulty].width), index % (GAME_SIZE[difficulty].width)]
);

export default indexToCoordinates;
