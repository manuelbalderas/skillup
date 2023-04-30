import { SET_TOKEN } from "../actions/actionType";

const INITIAL_STATE = {
  token: null,
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default tokenReducer;
