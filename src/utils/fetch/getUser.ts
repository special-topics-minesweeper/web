import axios from "./index";

export const getStats = async () => {
  return await axios.get('user');
};
