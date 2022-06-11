import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

const counterReducer = (
  state = { counter: "", plus: false, minus: false, equal: false },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: action.inputOne + action.inputTwo, plus: true, minus: false, equal: true };
    case "DECREMENT":
      return { counter: action.inputOne - action.inputTwo, plus: false, minus: true, equal: true };
    default:
      return state;
  }
};
//setting up store with middleware and redux dev tools viewers
const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
