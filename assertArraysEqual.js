const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let printOut;

  if (eqArrays(arrayOne, arrayTwo)) { // call eqArrays to compare arr1/2
    printOut = `✔️ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`;
  } else {
    printOut = `❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`;
  }

  console.log(printOut);
};

module.exports = assertArraysEqual;