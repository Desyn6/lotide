const letterPositions = function(inputString) {
  const letterBank = {};

  for (let i = 0; i < inputString.length; i++) {
    // support uppercase
    const char = inputString[i].toLowerCase();

    if (char !== ' ') {
      if (letterBank[char]) { // if key exists for char
        letterBank[char].push(i); // push i to existing index at key=char
  
      } else {
        letterBank[char] = [i]; // declare key with i if key does not exist yet
      }
    }
  }
  return letterBank;
};

console.log(letterPositions("lighthouse in the house"));