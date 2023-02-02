// include helper functions

const exp = require('constants');

function eqObjects(objOne, objTwo) {
  // Initial check: do the two objs have the same number of keys
  // I don't like how it looks when I nest the for..in loop in the else
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  
  // use objOne as comparison base
  for (const key in objOne) {
    const valueOne = objOne[key];
    const valueTwo = objTwo[key];

    if (!valueTwo) { //check if objTwo has the same keys
      return false;

    } else if (
      typeof valueOne === 'object' && // object check
      !Array.isArray(valueOne) &&
      valueOne !== null
    ) {
      return false;

    } else if (Array.isArray(valueOne)) { // array check
      if (!eqArrays(valueOne, valueTwo)) { // nest if and call eqArrays
        return false;
      }
    } else if (valueOne !== valueTwo) { // primitive check
      return false;
    }
  }

  return true;
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

  // only true if none of the bools are false
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let out;

  if (eqObjects(actual, expected)) {
    out = `✔️ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  } else {
    out = `❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
  }
  return out;
}

// This test should pass
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}));
// This test should pass
console.log(assertObjectsEqual({a: 1, b: [1, "str"]}, {a: 1, b: [1, "str"]})); 
// This test should fail
console.log(assertObjectsEqual({a: 1, b: 1}, {a:1, b: 2}));
// This test should fail
console.log(assertObjectsEqual({a: 1, b: [1, "1"]}, {a: 1, b:[1, 1]}));
// This test should fail
console.log(assertObjectsEqual({a: 1}, {a: 1, b: 2}));