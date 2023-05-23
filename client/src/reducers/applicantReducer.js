import { GET_APPLICANTS } from "../actions/actionType";

const INITIAL_STATE = {
  applicants: [],
};

const applicantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APPLICANTS:
      return {
        ...state,
        applicants: action.payload,
      };
    default:
      return state;
  }
};

export default applicantReducer;
