import { ICoordinates } from "./types";
import axios from "./index";

export const updateGame = async ({ gameId, x, y }: ICoordinates) => {
  return await axios.put(`games/${gameId}`, {
    x, y
  });
};
