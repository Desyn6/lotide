function eqObjects(objOne, objTwo) {
  // Initial check: do the two objs have the same number of keys
  // I don't like how it looks when I nest the for..in loop in the else
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    console.log("haha object not even same length");
    return false;
  }
  
  // use objOne as comparison base
  for (const key in objOne) {
    const valueOne = objOne[key];
    const valueTwo = objTwo[key];

    if (!valueTwo) { //check if objTwo has the same keys
      console.log("haha object keys not same");
      return false;

    } else if (
      typeof valueOne === 'object' && // object check
      !Array.isArray(valueOne) &&
      valueOne !== null
    ) {
      console.log("haha I can't do objects as values yet");
      return false;

    } else if (Array.isArray(valueOne)) { // array check
      if (!eqArrays(valueOne, valueTwo)) { // nest if and call eqArrays
        console.log("haha array mismatch");
        return false;
      }
    } else if (valueOne !== valueTwo) { // primitive check
      console.log("haha primitive mismatch");
      return false;
    }
  }

  console.log("all keys check out!");
  return true;
}

// self tests

// base object
const baseObj = {
  What: 1,
  Am:   [1, 2],
  I:    3,
  Doing:"string",
};

// comparison one, false - length mismatch
const objOne = {
  What: 1,
  Are:  2,
  I:    4,
};

// comparison two, false - key mismatch
const objTwo = {
  What: 1,
  Are:  2,
  I:    3,
  Doing:5,
};

// comparison three, false - array mismatch
const objThree = {
  What: 1,
  Am:   [1, 2, 3],
  I:    3,
  Doing:4,
};

// comparison four, false - primitive mismatch
const objFour = {
  What: 1,
  Am:   [1, 2],
  I:    3,
  Doing:5,
};

// comparison five, true!! finally!
const objFive = {
  What: 1,
  Am:   [1, 2],
  I:    3,
  Doing:"string",
};

// base 2, does not support objects
const baseObjTwo = {
  What: 1,
  Am:   [1, 2],
  I:    3,
  Doing:{a: 1},
};


console.log("Test 1, length mismatch");
console.log(eqObjects(baseObj, objOne));

console.log("Test 2, key mismatch");
console.log(eqObjects(baseObj, objTwo));

console.log("Test 3, array mismatch");
console.log(eqObjects(baseObj, objThree));

console.log("Test 4, primitive mismatch");
console.log(eqObjects(baseObj, objFour));

console.log("Test 5, true match");
console.log(eqObjects(baseObj, objFive));

console.log("Test 6, cannot handle objects");
console.log(eqObjects(baseObjTwo, baseObj));

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