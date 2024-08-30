import { useState } from "react";

function StateFormHandle() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const updateEmail = (newEmail) => {
    setUser({
      ...user, // ...user = name: "", age: 0, email: "", email: newEmail,
      email: newEmail,
    });
  };

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => updateEmail("newemail@example.com")}>
        Update Email
      </button>
    </>
  );
}

export default StateFormHandle;
