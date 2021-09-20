import {types} from "../types/types"
const userReducer = (state={}, action)=>{
  switch (action.type) {
    case types.user:
      return action.payload
    default:
      return state
  }
}

const usersReducer = (state=[], action) =>{
  switch (action.type) {
    case types.users:
      return action.payload
    default:
      return state
  }
}
export {userReducer, usersReducer}