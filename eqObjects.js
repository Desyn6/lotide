// include eqArrays to call within eqObjects
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

// code for eqObjects
const eqObjects = function(objOne, objTwo) {
  if (!objOne || !objTwo) {
    return false;
  }
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

    } else if (typeof valueOne === 'object' && // object check
      !Array.isArray(valueOne)) {
      if (!eqObjects(valueOne, valueTwo)) {
        return false;
      }
    } else if (Array.isArray(valueOne)) { // array check
      if (!eqArrays(valueOne, valueTwo)) { // nest if and call eqArrays
        return false;
      }
    } else if (valueOne !== valueTwo) { // primitive check
      return false;
    }
  }

  return true;
};




// old console.log() tests

// base object
// const baseObj = {
//   What: 1,
//   Am:   [1, 2],
//   I:    3,
//   Doing:"string",
// };

// // comparison one, false - length mismatch
// const objOne = {
//   What: 1,
//   Are:  2,
//   I:    4,
// };

// // comparison two, false - key mismatch
// const objTwo = {
//   What: 1,
//   Are:  2,
//   I:    3,
//   Doing:5,
// };

// // comparison three, false - array mismatch
// const objThree = {
//   What: 1,
//   Am:   [1, 2, 3],
//   I:    3,
//   Doing:4,
// };

// // comparison four, false - primitive mismatch
// const objFour = {
//   What: 1,
//   Am:   [1, 2],
//   I:    3,
//   Doing:5,
// };

// // comparison five, true!! finally!
// const objFive = {
//   What: 1,
//   Am:   [1, 2],
//   I:    3,
//   Doing:"string",
// };

// // base 2, does not support objects
// const baseObjTwo = {
//   What: 1,
//   Am:   [1, 2],
//   I:    3,
//   Doing:{a: 1},
// };


// console.log("Test 1, length mismatch");
// console.log(eqObjects(baseObj, objOne));

// console.log("Test 2, key mismatch");
// console.log(eqObjects(baseObj, objTwo));

// console.log("Test 3, array mismatch");
// console.log(eqObjects(baseObj, objThree));

// console.log("Test 4, primitive mismatch");
// console.log(eqObjects(baseObj, objFour));

// console.log("Test 5, true match");
// console.log(eqObjects(baseObj, objFive));

// console.log("Test 6, cannot handle objects");
// console.log(eqObjects(baseObjTwo, baseObj));

// const baseNest = {
//   a: {b: 1,
//       c: 2,
//       d: {i: 7,
//           o: [2, 3, 6]}},
//   e: [1, 4, 6],
//   f: {g: 5,
//      h: 9},
// };

// const nestTrue = {
//   a: {b: 1,
//       c: 2,
//       d: {i: 7,
//           o: [2, 3, 6]}},
//   e: [1, 4, 6],
//   f: {g: 5,
//       h: 9},
// };

// // const nestFalse = {
// //   a: {b: 1,
// //     c: 2,
// //     d: {i: 7,
// //         o: 10}},
// //   e: 4,
// //   f: {g: 5,
// //       h: 10},
// // };

// console.log("Test 7, matched nested objects");
// console.log(eqObjects(baseNest, nestTrue));

// console.log("Test 8, unmatched nested objects");
// console.log(eqObjects(baseNest, nestFalse));

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false