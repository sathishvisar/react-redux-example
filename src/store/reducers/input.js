
import { INPUTVAL } from "../actions/inputActions";


export const typing = (state = 0, action) => {
  switch (action.type) {
    case INPUTVAL:
      return state + 1
    default:
      return state;
  }
};