// 744. Find smallest Letter Greater Than Target

function nextGreatestLetter(letters: string[], target: string): string {
  const targetPosition: number = target.charCodeAt(0) % 32;

  for (const char of letters) {
    let position: number = char.charCodeAt(0) % 32;

    if (position > targetPosition) {
      return char;
    }
  }

  return letters[0];
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'));
