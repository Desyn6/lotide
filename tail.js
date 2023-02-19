const tail = function(inputArray) {
  if (!inputArray) {
    return undefined;
  }

  let outputArray = [];

  for (let i = 1; i < inputArray.length; i++) {
    outputArray[i - 1] = inputArray[i];
  }

  return outputArray;
};

module.exports = tail;