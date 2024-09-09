import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
};

const ReducerHook = () => {
  // * const [state, dispatch] = useReducer(reducer, initialState);
  // ? const [stateVariable, setStateVariable] = useState(initialValue);

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default ReducerHook;

// ! The useReducer Hook in React is a more advanced way to manage state in functional components, especially when the state logic is complex or involves multiple sub-values. It's an alternative to useState and is inspired by Redux, a popular state management library.
