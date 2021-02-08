import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const { counter, list } = useSelector((state) => state);

  return (
    <div>
      <h1>{counter}</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
