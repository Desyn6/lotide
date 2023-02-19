const eqArrays = require('./eqArrays');

const eqObjects = function(objOne, objTwo) {
  if (!objOne || !objTwo) {
    return false;
  }

  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  
  for (const key in objOne) {
    const valueOne = objOne[key];
    const valueTwo = objTwo[key];

    if (!valueTwo) {
      return false;

    } else if (typeof valueOne === 'object' && !Array.isArray(valueOne)) {
      if (!eqObjects(valueOne, valueTwo)) {
        return false;
      }
    } else if (Array.isArray(valueOne)) {
      if (!eqArrays(valueOne, valueTwo)) {
        return false;
      }
    } else if (valueOne !== valueTwo) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
