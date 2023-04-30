import { combineReducers } from "redux";

import authSuccess from "./authSuccess";
// import userReducer from "./userReducer";
// import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  authSuccess: authSuccess,
  // userState: userReducer,
  // tokenState: tokenReducer,
});

export default rootReducer;
