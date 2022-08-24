import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    // state.counter++              // NEVER EVER MUTATE THE STATE
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === "SUBTRACT_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state, // {counter , result}
      result: [state.counter, ...state.result],
    };
  } else if (action.type === "DELETE_RESULT") {
    return {
      ...state,
      result: state.result.filter((r, i) => i !== action.index),
    };
  } else {
    return state;
  }
}

const UseReducerDemo = () => {
  const [stateVar, dispatch] = useReducer(reducer, { counter: 0, result: [] });
  console.log(stateVar);
  return (
    <div>
      <h2>Counter : {stateVar.counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="btn btn-info"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "ADD_COUNTER", value: 10 })}
      >
        Add
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch({ type: "SUBTRACT_COUNTER", value: 5 })}
      >
        Subtract
      </button>
      <hr />
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "STORE_RESULT" })}
      >
        STORE
      </button>
      <ul>
        {stateVar.result.map((r, i) => (
          <li
            key={r}
            onClick={() => dispatch({ type: "DELETE_RESULT", index: i })}
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerDemo;

// let userOne = {
//     email : "foo@123",
//     age : 32
// }

// let userTwo = {
//     ...userOne,
//     age : 40
// }

// console.log(userTwo);           // {email : "foo@123", age :40}
