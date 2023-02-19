const map = function(inputArray, callbackFn) {
  const output = [];   // intialize empty array for results

  for (const element of inputArray) { //loop through all array elements
    // push result of callbackFn with element as argument to output array
    output.push(callbackFn(element));
  }
  return output;
};

module.exports = map;