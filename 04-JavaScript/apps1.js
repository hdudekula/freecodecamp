var sum = 10 + 10; //make this equal to 20 by changing the 0 into the appropriate number.
console.log(sum);

var difference = 45 - 33; //make this equal to 12 by changing the 0 into the appropriate number.
console.log(difference);

var product = 8 * 10; //make this equal to 80 by changing the 0 into the appropriate number.
console.log(product);

var quotient = 66 / 33; //make this equal to 2 by changing the 0 into the appropriate number.
console.log(quotient);

// Create a number with a decimal point here called myDecimal
var myDecimal = 12.12;
console.log(myDecimal);

var quotient = 4.4 / 2.0; // equals 2.2
var product = 2.0 * 2.5; // equals 5.0
console.log(product);

// A new array called myArray that contains both a string and a number
var myArray = ["a string", 12];
console.log(myArray);

// A nested array called myArray2.
var myArray2 = [["inception", "array"], 12];
console.log(myArray2);

// A variable called myData set iequal to the first value of myArray3.
var myArray3 = [1,2,3];
// Only change code below this line.
var myData = myArray3[0];
console.log(myData);

// Modify the data stored at index 0 of myArray to the value of 3.
var myArray = [1,2,3];
myArray[0] = 3;
console.log(myArray);

// Used the .pop() function to remove the last item from myArray.
var myArray = ["John", 23, ["cat", 2]];

var removed = myArray.pop(); // This should be ["cat", 2] and myArray should now be ["John", 23]
console.log(removed);

// Takes the myArray array and push() this value to the end of it: ["dog", 3].
var myArray = ["John", 23, ["cat", 2]];
myArray.pop();
//Add a ["dog", 3] to the end of myArray using push()
// Only change code below this line.
myArray.push(["dog", 3]);
console.log(myArray);