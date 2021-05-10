import { IGame } from "./types";
import axios from "./index";

export const getStats = async ({ difficulty }: IGame) => {
  return await axios.get(`games/${difficulty}/stats`);
};
