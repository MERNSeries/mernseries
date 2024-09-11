import { useRef, useState, useEffect } from "react";

const CounterRef = () => {
  const prevCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  }, [prevCount]);

  const increment = () => {
    prevCount.current = count;
    setCount(count + 1);
  };

  return (
    <>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount.current}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default CounterRef;
