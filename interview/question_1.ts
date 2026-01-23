// Write a program to arrange a string in alphabetical order and with lowercase letters before the uppercase letters.

// The overall sting will always be in sorted order.
// If there is a duplicate letter with different case, the lowercase letter will come before the uppercase letter in the sorted string.

// example input

// input- AaAcCDd
// output- aAAcCdD

// input -  WhatIsTheTiME
// output - aeEhhiIMstTTW

const transform = (str: string): string => {
  const map = new Map();

  for (let ch of str) {
    const code = ch.charCodeAt(0);
    const key = code % 32; // this is give us value rom 1 - 26

    if (!map.has(key)) {
      map.set(key, { lower: 0, upper: 0 });
    }

    if (code >= 97) {
      map.get(key).lower++;
    } else {
      map.get(key).upper++;
    }
  }

  console.log(map);

  let output = '';

  for (let i = 1; i <= 26; i++) {
    if (!map.has(i)) continue;

    const { lower, upper } = map.get(i);

    for (let j = 0; j < lower; j++) {
      // a to z
      output += String.fromCharCode(i + 96);
    }
    for (let j = 0; j < upper; j++) {
      // A to Z
      output += String.fromCharCode(i + 64);
    }
  }

  console.log({ output });
  return output;
};

transform('WhatIsTheTiME');
