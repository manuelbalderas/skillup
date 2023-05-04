import { GET_PUBLICATIONS } from "../actions/actionType";

export const INITIAL_STATE = {
  publications: [],
};

const publicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
      };
    default:
      return state;
  }
};

export default publicationReducer;
