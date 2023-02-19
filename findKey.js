const findKey = function(inputObj, callbackFn) {
  for (const prop in inputObj) {
    if (callbackFn(inputObj[prop])) {
      return prop;
    }
  }
};

module.exports = findKey;