 // this is a function that draws a triangle of size (n)
 //The function gets exported to Shapes.js
module.exports = function drawTriangle(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  return result;
};
