const assertEqual = function(actual, expected) {

  let printOut;

  if (actual === expected) {
    printOut = `✔️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    printOut = `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(printOut);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  /* original attempt without reading through exercise description */
  // let objCount;
  // for (let itemType in itemsToCount) {
  //   if (itemsToCount[itemType]) {
  //     objCount
  //     for (let item of allItems) {
  //       if (item === itemType) {
  //         objCount++
  //       }
  //     }
  //     results[itemType] = objCount;
  //   }
  // }

  /* attempt following exercise description */
  // loop through items in allItems
  for (const item of allItems) {
    // check itemsToCount if items is truthy for counting
    if (itemsToCount[item]) {
      // if item already exists in results, add 1
      if (results[item]) {
        results[item] += 1;
      // if item does not exist in results, create item
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);