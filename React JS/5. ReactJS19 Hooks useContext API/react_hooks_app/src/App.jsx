// import { useState } from "react";
// import StateHook from "./StateHook";
// import EffectHook from "./Effecthook";
import ReducerHook from "./ReducerHook";

const App = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <StateHook /> */}
      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide Counter" : "Show Counter"}
      </button>
      {toggle ? (
        <EffectHook />
      ) : (
        <div>Click on the above Button to see Counter</div>
      )} */}
      <ReducerHook />
    </>
  );
};

export default App;
