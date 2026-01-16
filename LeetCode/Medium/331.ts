// 331. Verify Preorder Serialization of a Binary Tree

function isValidSerialization(preorder: string): boolean {
  const stack = preorder.split(',');

  for (let i = stack.length - 3; i >= 0; i--) {
    if (stack[i] !== '#') {
      if (
        stack[i + 1] &&
        stack[i + 1] === '#' &&
        stack[i + 2] &&
        stack[i + 2] === '#'
      ) {
        stack.pop();
        stack.pop();
        stack[i] = '#';
      }
    }
  }

  if (stack.length === 1 && stack[0] === '#') {
    return true;
  }

  return false;
}

const preorder = '9,3,4,#,#,1,#,#,2,#,6,#,#';

console.log(isValidSerialization(preorder));
console.log(isValidSerialization('1,#'));
console.log(isValidSerialization('9,#,#,1'));
