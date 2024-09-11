import { useRef, useEffect } from "react";

const RefHook = () => {
  const inputElement = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  });
  console.log(inputElement.current);

  const focusInput = () => {
    inputElement.current.style.backgroundColor = "green";
  };

  return (
    <>
      <input
        ref={inputElement}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={focusInput}>Focus the Input</button>
    </>
  );
};

export default RefHook;
