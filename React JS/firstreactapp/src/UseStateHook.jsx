// State Management (hook)
import { useState } from "react";

function UseStateHook() {
  const [container, setContainer] = useState("MERN");
  const [age, setAge] = useState(0);

  return (
    <>
      <h5>UseStateHook Component</h5>
      <h3>{container}</h3>
      <button onClick={() => setContainer("MERN Series")}>Change Text</button>
      <h3>{age}</h3>
      <button onClick={() => setAge(27)}>Update Age</button>
    </>
  );
}

export default UseStateHook;

// ! The useState hook is one of the most commonly used hooks in React. It allows you to add state to functional components, which was previously only possible in class components.
