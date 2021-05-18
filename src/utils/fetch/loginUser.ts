import { ISignIn } from "./types";
import axios from "./index";

const createUser = async ({ login, password }: ISignIn) => {
  return await axios.post('user/key', {
    login, password
  });
};

export default createUser;
