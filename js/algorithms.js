// Popular Interview Algorithms

// Palindrome Check
const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

// Fibonacci Sequence
const fibonacci = (n) => {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

// Factorial Calculation
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// Prime Number Check
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

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
