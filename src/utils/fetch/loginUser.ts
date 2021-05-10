import { ISignIn } from "./types";
import axios from "./index";

export const createUser = async ({ login, password }: ISignIn) => {
  return await axios.post('user/key', {
    login, password
  });
};
