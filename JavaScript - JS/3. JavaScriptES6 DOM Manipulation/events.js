// ! What are Events?: Events are actions or occurrences that happen in the browser, such as clicking a button, hovering over an element, pressing a key, loading a page, etc.

// ? Event Handling: Handling events involves capturing the event and responding to it, usually by executing a function.

// * What is an Event Listener?: An event listener is a procedure in JavaScript that waits for an event to occur on a specified element.

// ! Adding an Event Listener: The addEventListener() method is used to attach an event listener to an element. This method does not overwrite existing event handlers.

// element.addEventListener(event, function, useCapture)

// function handleClick() {
//   alert("Button clicked!");
// }

// document.getElementById("myButton").addEventListener("click", handleClick);
// document.getElementById("myButton").removeEventListener("click", handleClick);

// ! What is an Event Handler?: An event handler is a function that gets executed in response to an event.

// ? Inline Event Handlers: You can define an event handler directly in the HTML using attributes like onclick, onmouseover, etc.

// document.getElementById("myButton").onclick = function () {
//   alert("Button Clicked!");
// };

// ! Difference Between Event Listeners and Event Handlers:
// ? Event listeners are more flexible and can handle multiple events on the same element without overwriting others.
// * Event handlers defined directly on an element's property will overwrite any previous event handler assigned to that property.

// document.getElementById("myButton").addEventListener("click", function (event) {
//   console.log(event);
// });

// ! event.type: The type of event (e.g., 'click', 'keydown').
// ? event.target: The element that triggered the event.
// * event.currentTarget: The element to which the event handler is attached.
// ! event.preventDefault(): Prevents the default action of the event (e.g., preventing a form from submitting).
// * event.stopPropagation(): Stops the event from bubbling up or propagating to other elements.

// ! Event Phases
// * Event Propagation: When an event occurs, it doesn't happen instantly. Instead, it goes through three phases:

// ? Capturing Phase: The event moves from the window down through the DOM tree to the target element. (Par => Chi)
// ! Target Phase: The event reaches the target element.
// * Bubbling Phase: The event bubbles back up through the DOM tree from the target element to the window.(Chi => Par)

document.getElementById("parentDiv").addEventListener("click", function () {
  console.log("Parent Div Clicked");
});

document.getElementById("childDiv").addEventListener("click", function (event) {
  console.log("Child Div Clicked");
  event.stopPropagation();
});
