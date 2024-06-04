/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphanumeric(ch) {
  if (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9")
  ) {
    return true;
  }
  return false;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (!isAlphanumeric(str[i])) {
      i++;
      continue;
    }
    if (!isAlphanumeric(str[j])) {
      j--;
      continue;
    }

    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
