export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

export const onSubtract = (value) => {
  return { type: SUBTRACT_COUNTER, value };
};
