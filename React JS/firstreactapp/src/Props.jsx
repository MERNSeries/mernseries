import "./Props.css";

// eslint-disable-next-line react/prop-types
function Props({ myValue, myNumber }) {
  return (
    <>
      <h1 className="h1Styles">Hello, I am a Prop Component.</h1>
      <h4>{`My Favourite Learning Series is ${myValue}`}</h4>
      <p>{myNumber}</p>
    </>
  );
}

export default Props;

// function myFunction(a, b) {
//   const add = a + b;
//   return add;
// }

// myFunction(2, 34)
