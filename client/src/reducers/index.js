import { combineReducers } from "redux";

import userReducer from "./userReducer";
import publicationReducer from "./publicationReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  detailState: detailReducer,
  publicationState: publicationReducer,
});

export default rootReducer;
