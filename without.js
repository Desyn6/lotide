// code for without()
const without = function(source, itemsToRemove) {
  // error handling code included
  if (!Array.isArray(source)) {
    return undefined;
  }
  if (!itemsToRemove || !Array.isArray(itemsToRemove)) {
    return source;
  }

  const filteredArr = [];

  for (let element of source) {
    // array.includes() returns true if matches are found
    if (!itemsToRemove.includes(element)) {
      // push() to filteredArr ONLY if element is not found
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

module.exports = without;