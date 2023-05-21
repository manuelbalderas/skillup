import { SET_DETAIL } from "../actions/actionType";

const INITIAL_STATE = {
  detail: null,
};

const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return {
        ...state,
        detail: action.detail,
      };
    default:
      return state;
  }
};

export default detailReducer;
