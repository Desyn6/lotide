const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(printOut);
};

function findKeyByValue(inputObject, searchValue) {
  const objectValues = Object.values(inputObject);
  
  return Object.keys(inputObject)[objectValues.indexOf(searchValue)];
}

// LHL-supplied tests

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// self-made tests

const chouxRecipe = {
  Milk:   '80g',
  Water:  '120g',
  Butter: '90g',
  Salt:   '2g',
  Sugar:  '3g',
  Egg:    '200g',
}

assertEqual(findKeyByValue(chouxRecipe, "120g"), "Water");
assertEqual(findKeyByValue(chouxRecipe, "1000g"), undefined);
assertEqual(findKeyByValue(chouxRecipe, "90g"), "Butter");