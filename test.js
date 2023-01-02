function isTriangle(a, b, c) {
  const arr = [a, b, c];
  arr.sort((one, two) => one - two);
  return arr[2] ** 2 <= arr[1] ** 2 + arr[0] ** 2;
}
console.log(isTriangle(3, 4, 5));
