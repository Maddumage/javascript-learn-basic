// Function to sort the input array and search for a specific number
function sortAndSearch() {
  // Get input from the user and convert it into an array of numbers
  let input = document.getElementById("numInput").value.trim();
  let numbers = input.split(",").map((num) => parseInt(num));

  // Get the selected sorting algorithm from the dropdown menu
  let sortingAlgorithm = document.getElementById("sortingAlgorithm").value;

  let sortedNumbers;
  // Select the appropriate sorting algorithm based on user input
  switch (sortingAlgorithm) {
    case "bubbleSort":
      sortedNumbers = bubbleSort(numbers);
      break;
    case "selectionSort":
      sortedNumbers = selectionSort(numbers);
      break;
    case "insertionSort":
      sortedNumbers = insertionSort(numbers);
      break;
    case "mergeSort":
      sortedNumbers = mergeSort(numbers);
      break;
    case "quickSort":
      sortedNumbers = quickSort(numbers);
      break;
    default:
      sortedNumbers = numbers; // Default to unsorted array
  }

  // Display the sorted array on the webpage
  document.getElementById("output").innerHTML =
    "Sorted Array: " + sortedNumbers.join(", ");
}

// Function to search for a specific number in the array
function search() {
  // Get the number to search from the user input
  let searchNum = parseInt(document.getElementById("searchNum").value.trim());

  // Get input from the user and convert it into an array of numbers
  let input = document.getElementById("numInput").value.trim();
  let numbers = input.split(",").map((num) => parseInt(num));

  // Get the selected sorting algorithm from the dropdown menu
  let searchAlgorithm = document.getElementById("sortingAlgorithm").value;

  let result;
  // Select the appropriate search algorithm based on user input
  switch (searchAlgorithm) {
    case "bubbleSort":
    case "selectionSort":
    case "insertionSort":
      result = linearSearch(numbers, searchNum); // Linear search for unsorted arrays
      break;
    case "mergeSort":
    case "quickSort":
      result = binarySearch(numbers, searchNum); // Binary search for sorted arrays
      break;
    default:
      result = linearSearch(numbers, searchNum); // Default to linear search
  }

  // Display search result on the webpage
  if (result !== -1) {
    document.getElementById("output").innerHTML +=
      "<br>Found at index: " + result;
  } else {
    document.getElementById("output").innerHTML += "<br>Number not found.";
  }
}

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

// Function to display popular interview algorithms
function displayAlgorithms() {
  const output = document.getElementById("algorithmsOutput");

  // Palindrome Check
  const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
  };
  output.innerHTML += `<p><strong>Palindrome Check:</strong> 'madam' is a palindrome: ${isPalindrome(
    "madam"
  )}</p>`;

  // Fibonacci Sequence
  const fibonacci = (n) => {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
  };
  output.innerHTML += `<p><strong>Fibonacci Sequence:</strong> First 5 numbers: ${fibonacci(
    5
  ).join(", ")}</p>`;

  // Factorial Calculation
  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };
  output.innerHTML += `<p><strong>Factorial Calculation:</strong> 5! = ${factorial(
    5
  )}</p>`;

  // Prime Number Check
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  output.innerHTML += `<p><strong>Prime Number Check:</strong> 7 is prime: ${isPrime(
    7
  )}</p>`;

  // Anagram Check
  const areAnagrams = (str1, str2) => {
    const normalize = (str) =>
      str
        .replace(/[^A-Za-z0-9]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");
    return normalize(str1) === normalize(str2);
  };
  output.innerHTML += `<p><strong>Anagram Check:</strong> 'listen' and 'silent' are anagrams: ${areAnagrams(
    "listen",
    "silent"
  )}</p>`;
}

// Call the functions to display content
displayConcepts();
displayAlgorithms();
