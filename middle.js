const middle = function(inputArray) {
  const middleVal = [];
  const midInd = Math.floor(inputArray.length / 2);

  if (inputArray.length <= 2) {
    return middleVal;
  }
  
  if (inputArray.length % 2 === 0) {
    middleVal.push(inputArray[midInd - 1]);
  }

  middleVal.push(inputArray[midInd]);

  return middleVal;
};

module.exports = middle;