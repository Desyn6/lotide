const findKeyByValue = function(inputObject, searchValue) {
  /* Solution using indexOf */

  // const objectValues = Object.values(inputObject);
  // return Object.keys(inputObject)[objectValues.indexOf(searchValue)];

  /* Solution using Object.keys */
  const objectKeys = Object.keys(inputObject);

  for (let key of objectKeys) {
    if (inputObject[key] === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
