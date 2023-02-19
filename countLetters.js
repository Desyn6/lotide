const countLetters = function(inputString) {
  const noSpaces = inputString.replace(/\W/g, '');
  const totalCount = {};

  for (let char of noSpaces) {
    char = char.toLowerCase();

    if (totalCount[char]) {
      totalCount[char] += 1;
    } else {
      totalCount[char] = 1;
    }
  }
  
  return totalCount;
};

module.exports = countLetters;