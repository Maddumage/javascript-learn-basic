// Searching Algorithms

// Linear Search implementation
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

// Binary Search implementation
function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) return mid;
    if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
