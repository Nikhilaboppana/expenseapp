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
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
