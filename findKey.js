const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(printOut);
};

// code for findKey.js

const findKey = function(inputObj, callbackFn) {
  for (const prop in inputObj) {
    if (callbackFn(inputObj[prop])) {
      return prop;
    }
  }
};

// LHL tests, but deconstructed
const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(movies, x => x.stars === 2), "noma");
assertEqual(findKey(movies, x => x.stars > 2), "Akaleri");

// Self tests,
const ingredients = {
  "Choux": {
    Milk: 110,
    Water: 90,
    Flour: 110,
    Butter: 90,
    Sugar: 2,
    Salt: 3
  },
  "Custard": {
    Milk: 500,
    Sugar: 120,
    Cornstarch: 50,
    Butter: 50,
    Yolk: 100,
  },
  "Genoise": {
    Egg: 200,
    Flour: 125,
    Sugar: 125,
  }
};


assertEqual(findKey(ingredients, x => x.Milk > 200), "Custard");
assertEqual(findKey(ingredients, x => x.Sugar === 125), "Genoise");