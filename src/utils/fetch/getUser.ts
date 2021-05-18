import axios from "./index";

export const getUser = async () => {
  return await axios.get('user');
};
