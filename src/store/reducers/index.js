import { combineReducers } from "redux";
import { counter } from "./counter";
import { typing } from './input';

const rootReducer = combineReducers({
  counter,
  typing
});

export default rootReducer;