import { combineReducers } from "redux";
import homeReducer from "./pages/home/reducer";
import { registrationReducer } from "./pages/register/reducer";
import { loginReducer } from "./pages/formLogin/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  registrationReducer: registrationReducer,
  loginReducer: loginReducer
});

export default rootReducer;