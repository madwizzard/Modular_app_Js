// making constatnt variables for the required modules
const readline = require('readline');
const triangle = require('./Shapes/triangle');
const square = require('./Shapes/square');
const diamond = require('./Shapes/diamond');
const { clear } = require('console');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// making a function to display a menu for the user to choose a shape and size to draw a shape from
// choice 1 is for triangle
// choice 2 is for square
// choice 3 is for diamond
// choice 4 is for exiting the application
function drawShape() {
  console.log("Please select a shape:");
  console.log("1. Triangle");
  console.log("2. Square");
  console.log("3. Diamond");
  console.log("4. Exit");
  
  rl.question("Enter your choice (1-4): ", (choice) => {
    // This asks the user if they are sure they want to exit the application after selecting option 4
    if (choice === '4') {
      rl.question("Are you sure you want to exit? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
          console.clear();
          console.log("Thank you for using the shape drawer i created. Have a nice day!");
          rl.close();
        } else {
          console.clear();
          drawShape();
        }
      });
    }
    // This asks for the size of the shape they want to draw and uses the shape coice to draw the shape
    else {
      rl.question("Enter the size of the shape: ", (size) => {
        if (choice === '1') {
          console.clear();
          console.log(triangle(size));
        } else if (choice === '2') {
          console.clear();
          console.log(square(size));
        } else if (choice === '3') {
          console.clear();
          console.log(diamond(size));
        } else {
          console.clear();
          console.log("Invalid choice. Please try again.");
          drawShape();
          return;
        }
        // This asks a user if they want to continue after drawing a shape. If they dont want to continue the application will exit
        rl.question("Do you want to continue? (yes/no): ", (answer) => {
          if (answer.toLowerCase() === 'yes') {
            console.clear();
            drawShape();
          } else if (answer.toLowerCase() === 'no'){
            console.clear();
            console.log("Thank you for using the shape drawer i created. Have a nice day!");
            rl.close();
          }
          else {
            console.clear();
            console.log("Invalid choice. Please try again.");
            drawShape();
          }
        });
      });
    }
  });
}
console.clear();
drawShape();
