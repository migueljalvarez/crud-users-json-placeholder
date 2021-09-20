import { types } from "../types/types";
import User from "../../services/user";

const getUsers = () => {
  return async (dispatch) => {
    const users = await User.get();
    dispatch({
      type: types.users,
      payload: users,
    });
  };
};

const getUserById = (id)=>{
  return async (dispatch) => {
    const user = await User.getById(id);
    dispatch({
      type: types.user,
      payload: user,
    });
  };
}
export { getUsers, getUserById };
