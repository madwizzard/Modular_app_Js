 // this is a function that draws a diamond of size (n)
 //The function gets exported to Shapes.js
module.exports = function drawDiamond(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
  }
  for (let i = n - 2; i >= 0; i--) {
    result += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
  }
  return result;
};
