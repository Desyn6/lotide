function countLetters(inputString) {
  const noSpaces = inputString.replace(/\W/g, ''); //filter out spaces
  const totalCount = {}; // declare empty object to populate

  for (let char of noSpaces) {
    // toLowerCase to ignore casing
    char = char.toLowerCase();

    // if char is in object, increase count
    if (totalCount[char]) {
      totalCount[char] += 1;

      // if char is not in object, introduce to object and set to 1
    } else {
      totalCount[char] = 1;
    }
  }
  
  return totalCount;
}

console.log(countLetters("Lighthouse in ThE HoUSe"));