import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ChildComponent({ onSendMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const sendDataToParent = () => {
    onSendMessage(inputValue);
  };

  return (
    <>
      <div
        style={{
          // padding: "20px",
          border: "1px solid",
          backgroundColor: "green",
        }}
      >
        <input
          type="text"
          placeholder="Enter a message"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={sendDataToParent}>Send Data to Parent</button>
      </div>
    </>
  );
}

export default ChildComponent;
