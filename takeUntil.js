const takeUntil = function(inputArray, callback) {
  if (!Array.isArray(inputArray)) {
    return undefined;
  }

  if (!callback) {
    return inputArray;
  }
  
  const output = [];

  for (const element of inputArray) {

    if (!callback(element)) {
      output.push(element);
    } else {
      break;
    }
  }

  return output;
};

module.exports = takeUntil;