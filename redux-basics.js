// CommonJS - Default run by Node
const redux = require("redux");

const initialState = {
  counter: 0,
};

// Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "ADD_COUNTER":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
}

// Store
const store = redux.createStore(rootReducer);

console.log("STATE : ", store.getState());

// Subscribe

store.subscribe(() => {
  console.log("STATE CHANGED TO ", store.getState());
});

// Dispatch Action

store.dispatch({ type: "INCREMENT" });
console.log("STATE AFTER INCREMENT : ", store.getState());

store.dispatch({ type: "DECREMENT" });
console.log("STATE AFTER DECREMENT : ", store.getState());

store.dispatch({ type: "ADD_COUNTER", payload: 10 });
console.log("STATE AFTER ADD_COUNTER : ", store.getState());
// useReducer(reducerFn, initialState)
