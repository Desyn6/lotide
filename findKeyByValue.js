const findKeyByValue = function(inputObject, searchValue) {
  const objectKeys = Object.keys(inputObject);

  for (let key of objectKeys) {
    if (inputObject[key] === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
