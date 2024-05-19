// Function to display JavaScript concepts
function displayConcepts() {
  const output = document.getElementById("conceptsOutput");

  // Variables and data types
  let message = "Hello, World!";
  let count = 5;
  let isJavaScriptFun = true;
  output.innerHTML += `<p><strong>Variables and Data Types:</strong> ${message}, ${count}, ${isJavaScriptFun}</p>`;

  // Functions
  function greet(name) {
    return `Hello, ${name}!`;
  }
  output.innerHTML += `<p><strong>Function:</strong> ${greet("Sumudu")}</p>`;

  // Objects
  const person = {
    firstName: "Sumudu",
    lastName: "Perera",
    age: 30,
  };
  output.innerHTML += `<p><strong>Object:</strong> ${person.firstName} ${person.lastName}, Age: ${person.age}</p>`;

  // Arrays
  const fruits = ["Apple", "Banana", "Cherry"];
  output.innerHTML += `<p><strong>Array:</strong> ${fruits.join(", ")}</p>`;

  // Loops
  let loopOutput = "Loop: ";
  for (let i = 0; i < 5; i++) {
    loopOutput += `${i} `;
  }
  output.innerHTML += `<p><strong>Loop:</strong> ${loopOutput}</p>`;

  // ES6 Features: Arrow Functions
  const add = (a, b) => a + b;
  output.innerHTML += `<p><strong>Arrow Function:</strong> 5 + 3 = ${add(
    5,
    3
  )}</p>`;

  // Promises
  const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
  promise.then(
    (result) =>
      (output.innerHTML += `<p><strong>Promise:</strong> ${result}</p>`)
  );

  // Async/Await
  async function asyncFunction() {
    let result = await promise;
    output.innerHTML += `<p><strong>Async/Await:</strong> ${result}</p>`;
  }
  asyncFunction();
}
