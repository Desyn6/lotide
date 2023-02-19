const map = function(inputArray, callbackFn) {
  const output = [];

  for (const element of inputArray) {
    output.push(callbackFn(element));
  }
  
  return output;
};

module.exports = map;