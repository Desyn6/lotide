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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should return PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should return FAIL
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should return FAIL