import React from "react";

// function ChildComponent({ count }) {
//   return <p>Count from parent: {count}</p>;
// }
function ChildComponent({ count = 0 }) {
  return <p>Count from parent: {count}</p>;
}

export default ChildComponent;
