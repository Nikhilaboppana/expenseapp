import React from "react";

const DemoChild = (props) => {
  console.log("CHILD");
  return <div>{props.toggle && <p>Demo Child Works</p>}</div>;
};

export default React.memo(DemoChild);

// props.prev.toggle === props.toggle
// props.prev.changeValue === props.changeValue     -> false
// props.prev.numbers === props.numbers         --> false
