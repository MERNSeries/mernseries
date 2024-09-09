import { useState, useEffect } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EffectHook Component Mounted");
    return () => {
      console.log("EffectHook Component UnMounted");
    };
  }, []);

  useEffect(() => {
    console.log("EffectHook Component State Changes");
  }, [count]);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default EffectHook;
