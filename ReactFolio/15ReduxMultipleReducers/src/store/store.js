import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  count:countReducer,
  theme: themeReducer,
  user: userReducer,
})
export const store = createStore(rootReducer)
