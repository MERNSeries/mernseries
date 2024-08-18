// ! 1. The Document Object Model (DOM) is a programming interface that allows developers to interact with and manipulate the content, structure, and style of a web document. Understanding the DOM is fundamental to working with JavaScript in the context of web development.

// ? 2. Definition: The DOM is an API (Application Programming Interface) for HTML and XML documents. It defines the logical structure of documents and the way they are accessed and manipulated.

// * 3. Tree Structure: The DOM represents the document as a tree of nodes. Each node can be an element, an attribute, a text string, etc. The topmost node is the document node, which represents the entire document.

// ! 4. Element Nodes: Represent HTML elements (<div>, <p>, etc.).
// * Text Nodes: Represent the text content inside elements.
// ? Attribute Nodes: Represent attributes of elements (like class, id).
// ! Document Nodes: Represent the entire HTML or XML document.

// ? 5. Accessing the DOM
// ! => document Object: The document object is the entry point to the DOM. It represents the entire HTML document.

// console.log(document);

// ? 6. Selecting the Elements
// ! A. getElementById()
// ! B. getElementsByClassName()
// ! C. getElementsByTagName()
// ! D. querySelector()
// ! E. querySelectorAll()

let element = document.getElementsByTagName("button");
// console.log(element);

// let elementButton = document.querySelectorAll("button");
// console.log(elementButton);

// ? 7. Modifying the Content

// ? 1. Changing the Content.
// ! A. innerHTML
// ! B. textContent

// let myNewText = (element[0].innerHTML = "MERN Series");
// console.log(element[0].textContent);

// ? 2. Changing Attribute.

// ! A. setAttribute()
// ! B. getAttribute()
// ! B. removeAttribute()

// let button = document.querySelector("button");
// button.setAttribute("class", "btn");
// console.log(button.getAttribute("class"));
// button.removeAttribute("class");
// console.log(button);

// ? 3. Creating and Adding Elements

// ! A. createElement()
// ! B. appendChild()
// ! C. insertBefore()
// ! D. removeChild()

// let paragraph = document.createElement("p");
// paragraph.textContent = "Hello, I am a paragrapgh tag.";
// document.body.appendChild(paragraph);
// document.body.insertBefore(paragraph, button);
// document.body.removeChild(paragraph);

// ! Event Handling

// button.addEventListener("click", function () {
//   console.log("Element clicked!");
// });

// ? Traversing the DOM

// ! Traversal of the DOM involves navigating through the elements and nodes of a document.

// const parentElement = document.getElementById("parent");
// Parent to Child
// const firstChildElement = parentElement.firstElementChild;
// console.log("First Child Element:", firstChildElement);

// const lastChildElement = parentElement.lastElementChild;
// console.log("Last Child Element:", lastChildElement);

// const allChildren = parentElement.children;
// console.log("All Child Elements:", allChildren);

// const secondChildElement = document.getElementById("secondChild");
// const parentOfSecondChild = secondChildElement.parentNode;
// console.log("Parent of Second Child Element:", parentOfSecondChild);

// const thirdChildElement = document.getElementById("thirdChild");
// const nextSiblingElement = thirdChildElement.nextElementSibling;
// console.log("Next Sibling of Third Child:", nextSiblingElement);

// Access the Element Node

const elementNode = document.getElementById("elementNode");
// console.log("Element Node:", elementNode);
// console.log("Node Type:", elementNode.nodeType);

// Node Type: 1 => Element Node

const textNode = document.getElementById("textNode").firstChild;
// console.log("Text Node:", textNode);
// console.log("Node Type:", textNode.nodeType);

// Node Type: 3 => Text Node

const commentNode = document.createComment("This is a comment node");
document.getElementById("commentNode").appendChild(commentNode);
// console.log("Comment Node:", commentNode);
// console.log("Node Type:", commentNode.nodeType);

// Node Type: 8 => Comment Node

const documentNode = document;
console.log("Document Node:", documentNode);
console.log("Node Type:", documentNode.nodeType);

// Node Type: 9 => Document Node
