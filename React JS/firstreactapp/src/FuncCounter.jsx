import { useState } from "react";

function FuncCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default FuncCounter;

// * JSX => JavaScript Extension Syntax
// ! Function-based components, also known as functional components, are simpler and more concise. They are essentially JavaScript functions that return JSX (JavaScript XML), which defines the UI of the component.
// ? Hooks: Function components can use React Hooks (like useState, useEffect, etc.) to manage state and lifecycle methods, making them powerful and versatile.
// * Stateless: Originally, function components were used for stateless components. However, with the introduction of Hooks in React 16.8, they can now manage state and handle side effects.
