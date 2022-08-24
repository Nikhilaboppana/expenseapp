import React from "react";
import { useDispatch } from "react-redux";
import * as fromAction from "../../../store/actions";

const CounterButton = () => {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: fromAction.INCREMENT });
  };
  const DecreaseHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const ADD_COUNTER = () => {
    dispatch({ type: "ADD_COUNTER", value: 10 });
  };
  // const SUBTRACT_COUNTER = () => {
  //   dispatch({ type: "SUBTRACT_COUNTER", Value: 5 });
  // };
  return (
    <div className="text-center">
      <div className="btn-group">
        <button className="btn btn-primary" onClick={increaseHandler}>
          Increase
        </button>
        <button className="btn btn-dark" onClick={DecreaseHandler}>
          Decrease
        </button>
        <button className="btn btn-success" onClick={ADD_COUNTER}>
          Add(10)
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(fromAction.onSubtract(5))}
        >
          SUBTRACT(5)
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
