import { GET_COMPANIES } from "../actions/actionType";

export const INITIAL_STATE = {
  companies: [],
};

const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
