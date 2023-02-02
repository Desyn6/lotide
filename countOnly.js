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

  /* second attempt revised by Ebenezer Igbinoba (mentor) */
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      if(allItems.includes(item)) {
        const itemCount = allItems.filter(el => el === item).length
        results[item] = itemCount;
      } else {
        results[item] = 0;
      }
    }
  }
  
  /* attempt following exercise description */
  /* loop through items in allItems */
  // for (const item of allItems) {
  //   // check itemsToCount if items is truthy for counting
  //   if (itemsToCount[item]) {
  //     // if item already exists in results, add 1
  //     if (results[item]) {
  //       results[item] += 1;
  //     // if item does not exist in results, create item
  //     } else {
  //       results[item] = 1;
  //     }
  //   }
  // }

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
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(result1);