const letterPositions = function(inputString) {
  const letterBank = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i].toLowerCase();

    if (char !== ' ') {
      if (letterBank[char]) {
        letterBank[char].push(i);
  
      } else {
        letterBank[char] = [i];
      }
    }
  }

  return letterBank;
};

module.exports = letterPositions;