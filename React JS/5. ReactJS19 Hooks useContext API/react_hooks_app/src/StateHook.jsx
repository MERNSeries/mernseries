import { useState } from "react";

const StateHook = () => {
  // ! const [stateVariable, setStateVariable] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default StateHook;

// The useState Hook in React is a way to add state to your functional components. State allows your components to remember information between renders.

// In React, hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 to allow functional components to manage state and lifecycle features previously only available in class components
