/* Function code for returning tail elements of an input array */
const tail = function(inputArray) {
  let outputArray = [];

  /*to trim out first value, start index at 1*/
  for (let i = 1; i < inputArray.length; i++) {
    outputArray[i - 1] = inputArray[i];
  }

  return outputArray;
};

module.exports = tail;