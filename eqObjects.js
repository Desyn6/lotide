// import eqArrays
const eqArrays = require('./eqArrays');

// code for eqObjects
const eqObjects = function(objOne, objTwo) {
  if (!objOne || !objTwo) {
    return false;
  }
  // Initial check: do the two objs have the same number of keys
  // I don't like how it looks when I nest the for..in loop in the else
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  
  // use objOne as comparison base
  for (const key in objOne) {
    const valueOne = objOne[key];
    const valueTwo = objTwo[key];

    if (!valueTwo) { //check if objTwo has the same keys
      return false;

    } else if (typeof valueOne === 'object' && // object check
      !Array.isArray(valueOne)) {
      if (!eqObjects(valueOne, valueTwo)) {
        return false;
      }
    } else if (Array.isArray(valueOne)) { // array check
      if (!eqArrays(valueOne, valueTwo)) { // nest if and call eqArrays
        return false;
      }
    } else if (valueOne !== valueTwo) { // primitive check
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
