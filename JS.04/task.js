// 1. Create a variable with a decimal number and round it to the nearest integer using a suitable method.
let float = 12.99
console.log(Math.round(float));


// 2. Generate a random number between 0 and 10 (inclusive).

console.log(Math.floor(Math.random() * 11));

// 3. Convert a string "42.9" into a number and round it down.

let number1 = parseFloat('42.9')
console.log(Math.floor(number1));


// 4. Convert a string "99.5" into a number and round it up.
let number2 = parseFloat('99.5')
console.log(Math.ceil(number2));


// 5. Format a number (like 1234.56789) to have only 2 decimal places.

let number3 = 1234.56789
console.log(number3.toFixed(2));


// 6. Generate a random integer between 1 and 100.

console.log(Math.ceil(Math.random() * 100));

// 7. Convert a floating number 12.34567 to a string with 3 digits after the decimal point.

let number4 =  12.34567
console.log(number4.toFixed(3));


// 8. Parse the string "100px" and get only the numeric part as a number.

let  number5 = "100px"
let num1 = parseInt(number5)
console.log(num1);


// 9. Check if "Hello" can be converted to a valid number.

let string = "Hello"
let numb3 = parseInt(string)
console.log(numb3);


// 10. Generate 5 random numbers between 0 and 1 and store them in an array.

let array = []
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 2)); 
}
console.log(array);
