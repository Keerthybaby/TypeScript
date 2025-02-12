import React from "react";
import Parent from "./Parent"
import Child from "./Child"
import SecondChild from "./SecondChild";

const ChildrenPropexample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropexample;
