// Test/assertion functions

function assertArraysEqual(arrayOne, arrayTwo) {
  let printOut;

  if (eqArrays(arrayOne, arrayTwo)) { // call eqArrays to compare arr1/2
    printOut = `✔️ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`;
  } else {
    printOut = `❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`;
  }

  console.log(printOut);
}

function eqArrays(arrayOne, arrayTwo) {
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
}


// Implement middle.js function

function middle(inputArray) {
  const middleVal = [];
  // calc index of middle value
  // for odd element counts, this is the mid index
  // for even element counts this is the upper mid index
  const midInd = Math.floor(inputArray.length / 2);

  // do not evaluate if array has 2 or less elements
  if (inputArray.length <= 2) {
    return middleVal;
  }
  
  // push lower mid index first (only for even element counts)
  if (inputArray.length % 2 === 0) {
    middleVal.push(inputArray[midInd - 1]);
  }

  // always push mid index
  middleVal.push(inputArray[midInd]);

  return middleVal;
}

// test if middle() mutates input array
let testArray = [1, 2, 3, 4, 5, 6];
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4, 5, 6]);

// test if middle() yields intended outputs
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["Malcome", "in", "the", "Middle"]), ["in", "the"]);