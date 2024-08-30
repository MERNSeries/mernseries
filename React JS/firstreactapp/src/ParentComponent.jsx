import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [message, setMessage] = useState("");

  // ! Function to get the Data from Child
  const handleChildData = (childData) => {
    setMessage(childData);
  };
  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid",
          backgroundColor: "red",
          fontSize: "20px",
        }}
      >
        <h1>Message from Child: {message}</h1>
        <ChildComponent onSendMessage={handleChildData} />
      </div>
    </>
  );
}

export default ParentComponent;
