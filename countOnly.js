const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      if (allItems.includes(item)) {
        const itemCount = allItems.filter(el => el === item).length;
        results[item] = itemCount;
      } else {
        results[item] = 0;
      }
    }
  }

  return results;
};

module.exports = countOnly;
