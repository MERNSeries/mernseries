import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FuncCounter from "./FuncCounter";
// import ClassCounter from "./classCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FuncCounter />
    {/* <ClassCounter /> */}
  </StrictMode>
);
