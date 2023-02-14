const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !== ${expected}`;
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
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      // recursively call eqArrays if array[i] is an array
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  // only true if no falses occur during iteration
  return true;
};
// test eqArrays using assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false