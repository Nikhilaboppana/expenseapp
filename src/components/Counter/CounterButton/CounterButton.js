import React from "react";
import { useDispatch } from "react-redux";

const CounterButton = () => {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div className="text-center">
      <div className="btn-group">
        <button className="btn btn-primary" onClick={increaseHandler}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
