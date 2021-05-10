import { ISignUp } from "./types";
import axios from "./index";

export const createUser = async ({ firstName, lastName, username, email, password }: ISignUp) => {
  return await axios.post('users', {
    firstName, lastName, username, email, password
  });
};
