import { combineReducers } from "redux";

import userReducer from "./userReducer";
// import userReducer from "./userReducer";
// import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  // userState: userReducer,
  // tokenState: tokenReducer,
});

export default rootReducer;
