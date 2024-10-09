// 17. Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // if digits is empty return empty array
  if (!digits.length) return [];

  // create a map using the numbers and words
  const keyboard = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // variable for storing the result
  const result = [];

  function recursive(index, comb) {
    // base case -> if the index === digits.length -> return
    if (index === digits.length) {
      result.push(comb);
      return;
    }

    for (const l of keyboard[digits[index]]) {
      // find the corresponding word from the map and loop for the word
      // calling recursive function with index + 1 and adding the letter with the comb
      recursive(index + 1, comb + l);
    }
  }

  // calling the function with index -> 0 and comb -> empty string
  recursive(0, "");

  return result;
};
