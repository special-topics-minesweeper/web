import { ICoordinates } from "./types";
import axios from "./index";

export const updateGame = async ({ gameId, x, y }: ICoordinates) => {
  console.log(gameId)
  return await axios.put(`games/${gameId}`, null, {
    params: {
      x, y
    }
  });
};
