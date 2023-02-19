// code for flatten
const flatten = function(inputArray) {
  const flattenedArray = [];

  // loop through every single element of inputArray
  for (let element of inputArray) {
    // check if any element is a nested array
    if (Array.isArray(element)) {
      // loop through subelements if nested array
      for (let subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      // push directly to flattenedArray otherwise
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;