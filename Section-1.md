React and JavaScript FAQ
1. What is the difference between controlled and uncontrolled components in React?
In React, components that manage their own state are called uncontrolled components, while components that rely on React state to manage their values are called controlled components.

Controlled Component: The value of the form element is controlled by React state. You update the state using setState or useState.

Example:

 
  
const [inputValue, setInputValue] = useState("");

return <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
Uncontrolled Component: React doesn't manage the input state. Instead, the input's value is managed by the DOM.

Example:

  
  
return <input defaultValue="Uncontrolled" />;
2. What is the significance of the functional Component in React? Explain hooks like useEffect, useState, and useRef hooks.
Functional Components: These are simple functions that return   . They don't have lifecycle methods or state by default, but you can manage these using React Hooks.

Hooks:

useState: Lets you add state to a functional component.

  
  
const [count, setCount] = useState(0);
useEffect: Handles side effects like fetching data, updating the DOM, or subscribing to events. It runs after the component renders.

  
  
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);  // Runs only when 'count' changes
useRef: Creates a reference to a DOM element or stores values that persist between renders without triggering re-renders.

  
  
const inputRef = useRef(null);
3. What is Redux Toolkit, and how does it work with React? What is prop drilling and how can you avoid it?
Redux Toolkit: It simplifies state management in React. It provides a simple API for managing global state without much boilerplate. With Redux Toolkit, you create slices that combine actions and reducers into one structure.

Prop Drilling: Passing props through multiple layers of components. It can make your code messy when many components need access to the same prop.

Avoid Prop Drilling: Use Context API or Redux to manage state globally and avoid passing props through many components.
4. What is Box Model in CSS? How to Create Custom Scrollbars using CSS?
Box Model: In CSS, every element is a rectangular box. It consists of 4 parts:

Content: The actual content.
Padding: Space between the content and the border.
Border: The area around the padding.
Margin: Space outside the border.
Custom Scrollbars:

css
  
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: lightgrey;
}
5. What is “callback hell”? Is it possible to avoid callback hells and how?
Callback Hell: Happens when you have multiple nested callback functions, making your code hard to read and maintain.

Example:

  
  
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      // and so on...
    });
  });
});
Avoiding Callback Hell: Use Promises or async/await to handle asynchronous code more cleanly.

Example with Promises:

  
  
doTask1()
  .then(() => doTask2())
  .then(() => doTask3());
6. Explain the concept of closures in JavaScript and provide a real-world example where closures would be beneficial.
Closure: A function remembers the variables from its outer function even after the outer function has finished executing.

Example:

  
  
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
Real-world use: Closures are helpful when creating private variables or when you need to persist state in functions.

7. How would you explain the event loop in JavaScript, and why is it crucial for managing asynchronous operations in the language?
Event Loop: It is a mechanism in JavaScript that handles asynchronous code. It allows the JavaScript engine to execute tasks in the background and then pick them up when they're ready (e.g., after a timer or data fetch).

The event loop checks:

Is the call stack (sync tasks) empty?
If yes, it moves tasks from the callback queue (async tasks) to the call stack.
The event loop ensures that async code doesn't block the main thread, keeping JavaScript non-blocking and efficient.

8. Write a function that makes three asynchronous calls using Promises. Ensure they complete in order, regardless of their individual completion times. How would you handle errors in such a scenario?
  
  
function makeAsyncCalls() {
  return firstCall()
    .then(() => secondCall())
    .then(() => thirdCall())
    .catch((err) => {
      console.error("An error occurred:", err);
    });
}
Here, the calls will happen one after the other, and if any call fails, the .catch block will handle the error.

9. Explain ES6 features in JavaScript with examples.
Arrow Functions: Shorter function syntax.

  
  
const sum = (a, b) => a + b;
Template Literals: Allows embedding variables into strings easily.

const name = "John";
console.log(`Hello, ${name}!`);
Destructuring: Extract values from arrays or objects easily.

const [a, b] = [1, 2];
const { name, age } = { name: "Alice", age: 25 };
Let and Const: New ways to declare variables.

let x = 10; // block-scoped variable
const y = 20; // constant variable
This is a simple summary of important concepts in React, JavaScript, and CSS!
