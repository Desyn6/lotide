// Functions called to test without
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

// code for without()
const without = function(source, itemsToRemove) {
  const filteredArr = [];

  for (let element of source) {
    // array.includes() returns true if matches are found
    if (!itemsToRemove.includes(element)) {
      // push() to filteredArr ONLY if element is not found
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

// Test without function

assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3]), [1, 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], [0]), [1, 2, 3, 4, 5]);

// Test if without mutates the input array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
