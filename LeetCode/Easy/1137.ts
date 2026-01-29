// 1137. N-th Tribonacci Number

function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  const fib: number[] = [0, 1, 1];

  for (let i = 1; i <= n - 3; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2] + fib[fib.length - 3]);
  }

  return fib[n - 1] + fib[n - 2] + fib[n - 3];
}

function tribonacciV2(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const dp = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

function tribonacciRecursive(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  return (
    tribonacciRecursive(n - 1) +
    tribonacciRecursive(n - 2) +
    tribonacciRecursive(n - 3)
  );
}

console.log(tribonacci(25));
console.log(tribonacciV2(25));
console.log(tribonacciRecursive(25));
