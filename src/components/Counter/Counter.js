import React from "react";
import CounterButton from "./CounterButton/CounterButton";
import CounterOutput from "./CounterOutput/CounterOutput";

const Counter = () => {
  return (
    <div>
      <CounterOutput />
      <CounterButton />
    </div>
  );
};

export default Counter;
