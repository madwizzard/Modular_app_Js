 // this is a function that draws a square of size (n)
 //The function gets exported to Shapes.js
module.exports = function drawSquare(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += '*'.repeat(n) + '\n';
  }
  return result;
};
