import { ISignUp } from "./types";
import axios from "./index";

export const createUser = async ({ firstname, lastname, username, email, password }: ISignUp) => {
  return await axios.post('users', {
    firstname, lastname, username, email, password
  });
};
