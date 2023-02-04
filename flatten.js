// Functions called to test flatten()
const assertArraysEqual = function(arrayOne, arrayTwo) {
  let printOut;

  if (eqArrays(arrayOne, arrayTwo)) { // call eqArrays to compare arr1/2
    printOut = `✔️ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`;
  } else {
    printOut = `❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`;
  }

  console.log(printOut);
};

const eqArrays = function(arrayOne, arrayTwo) {
  // compare length of array1/2
  // this catches cases like [1, 2, 3] and [1, 2]
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  // loop to compare each element of array1/2
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  
  return true; // only true if none of the bools are false
};

// code for flatten
const flatten = function(inputArray) {
  const flattenedArray = [];

  // loop through every single element of inputArray
  for (let element of inputArray) {
    // check if any element is a nested array
    if (Array.isArray(element)) {
      // loop through subelements if nested array
      for (let subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      // push directly to flattenedArray otherwise
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

// Call assertArraysEqual to test flatten()
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// Check if flatten mutates inputArray
let shouldNotMutate = [1, 2, 3, [3, 4], 5];
flatten(shouldNotMutate);
console.log(shouldNotMutate);
