import { LOG_OUT } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
  token: null,
};

const logOut = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default logOut;
