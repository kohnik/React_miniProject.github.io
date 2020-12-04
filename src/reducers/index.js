import { combineReducers } from "redux";

import login from "./login";

//import users from "./users";
//import modal from "./modal";

const reducers = combineReducers({
  
  login: login,
  
});

export { reducers };
