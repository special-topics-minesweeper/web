import { IGame } from "./types";
import axios from "./index";

export const createGame = async ({ difficulty }: IGame) => {
  return await axios.post('games', {
    difficulty
  });
};
