function facto(n) {
  if (n === 1 || n === 0) return 1;
  return n * facto(n - 1);
}
console.log(facto(4));
