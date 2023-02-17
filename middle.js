// Test/assertion functions
const assertArraysEqual = require('./assertArraysEqual');

// Implement middle.js function

const middle = function(inputArray) {
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
};

module.exports = middle;