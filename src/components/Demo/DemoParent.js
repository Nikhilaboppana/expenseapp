import React, { useCallback, useMemo, useState } from "react";
import DemoChild from "./DemoChild";

const DemoParent = () => {
  const [toggle, setToggle] = useState(false);
  console.log("PARENT");

  const changeValue = useCallback(() => console.log("CHANGING VALUES"), []);
  // const changeValue = useMemo(() => () => console.log("CHANGING VALUES"), [])

  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>Demo Parent Works</p>
      {/* <DemoChild toggle={false} /> */}
      <DemoChild toggle={false} changeValue={changeValue} />
      {/* <DemoChild numbers={numbers} /> */}
    </div>
  );
};

export default DemoParent;
