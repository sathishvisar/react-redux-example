import { combineReducers } from "redux";
import { counter } from "./counter.reducer";
import todos from './todo.reducer';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;