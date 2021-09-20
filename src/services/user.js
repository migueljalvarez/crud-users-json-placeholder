import axios from "axios";
import config from "../config/config";
const baseUrl = `${config.apiUrl}/users`;

const get = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const getById = async (id) => {
  const url = `${baseUrl}/${id}`;
  const { data } = await axios.get(url);
  return data;
};
const User = { get, getById };
export default User;
