import { AUTH_SUCCESS } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
  token: null,
};

const authSuccess = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authSuccess;
