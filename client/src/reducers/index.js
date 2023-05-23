import { combineReducers } from "redux";

import userReducer from "./userReducer";
import publicationReducer from "./publicationReducer";
import applicantReducer from "./applicantReducer";
import detailReducer from "./detailReducer";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  detailState: detailReducer,
  applicantState: applicantReducer,
  publicationState: publicationReducer,
  companyState: companyReducer,
});

export default rootReducer;
