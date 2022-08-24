import { createStore } from "redux";

const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD_COUNTER":
      return {
        counter: state.counter + action.value,
      };
    case "SUBTRACT_COUNTER":
      return {
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
