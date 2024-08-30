// import UseStateHook from "./UseStateHook";
// import StateFormHandle from "./StateFormHandle";
// import Props from "./Props";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <>
      <h1>Welcome to React JS App</h1>
      {/* <Props myNumber={567} myValue={"MERN SERIES"} /> */}
      <ParentComponent />
    </>
  );
}

export default App;

// Transferring the Data from Child to Parent(Props)
