const without = function(source, itemsToRemove) {
  if (!Array.isArray(source)) {
    return undefined;
  }
  if (!itemsToRemove || !Array.isArray(itemsToRemove)) {
    return source;
  }

  const filteredArr = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

module.exports = without;