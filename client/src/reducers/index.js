import { combineReducers } from "redux";

import userReducer from "./userReducer";
import publicationReducer from "./publicationReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  publicationState: publicationReducer,
});

export default rootReducer;
