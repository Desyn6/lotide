// takeUntil function below
const takeUntil = function(inputArray, callback) {
  // invalid input handling code added
  if (!Array.isArray(inputArray)) {
    return undefined;
  }

  if (!callback) {
    return inputArray;
  }
  
  const output = [];

  for (const element of inputArray) {

    // push value to output as long as callback is false
    if (!callback(element)) {
      output.push(element);
    } else {
      // otherwise, break out of loop
      break;
    }
  }

  return output;
};

module.exports = takeUntil;