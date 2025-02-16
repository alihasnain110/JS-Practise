// var city = prompt('enter your fav city');
// if(city === 'karachi'){
//     alert('correct');
// }

// var myData = "Ali";
// if (myData ==="Ali"){
//     score++;
//     aliData = "genius boy";
//     alert('correct');
// }

// var yourOrderno = +prompt('please enter your order number');
// if (yourOrderno !== 55) {
//     alert('order no is not correct');
// } else {
//     alert('order no is correct');

// }

// var city = prompt('Inwhich city ali lives');
// if (city === 'karachi') {
//     alert('Correct, ali lives in karachi ')
// }
// if (city !== 'karachi') {
//     alert("ali lives in other city ");
// }

// var friuts = prompt('ENTER MY FAV FRUIT');
// if (friuts === "Mango") {
//     alert('correct');
// }
// else if (friuts !== "Mango") {
//     alert('Close better luck next time');
// }
// else {
//     alert('incorrect');
// }

// var weight = +prompt('enter your Weight');
// var time = +prompt('enter your Time');

// if (weight > 300 && time < 6) {
//     alert("Come to our tryout!");

// }
// else {
//     alert("Come to our cookout!");

// }

// var weight = +prompt('Enter your Weight');
// var time = +prompt('Enter your Time');
// var age = +prompt('Enter your Age');
// var gender = prompt('Enter your Gender');
// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//     alert("Come to our tryout!");

// }
// else {
//     alert("Come to our cookout!");

// }

// var obtainMarks = prompt('enter your marks ');
// var GPA = +prompt('enter your gpa');
// if (obtainMarks === "" || GPA === "") {
//     alert("please enter a value");

// }
// else if (obtainMarks < 200 || GPA < 2) {
//     console.log('you are Fail ');
// }
// else if (obtainMarks > 200 || GPA > 2) {
//     console.log('you got good marks ');

// }
// else if (obtainMarks < 500 || GPA < 3.5) {
//     console.log("very good");

// }
// else if (obtainMarks < 600 || GPA < 4) {
//     console.log("Execellent");

// }

// else {
//     console.log('you got bad marks');
// }

// var animalsNames = ['dog', 'cat', 'lion', 'lizard']

// animalsNames.pop('lizard');
// animalsNames.push('helo');
// animalsNames.shift('helo');
// animalsNames.unshift('helo');

// console.log(animalsNames);

// var cleanestCities = ['khi', 'lhr', 'isl'];
// var city = prompt('enter your cities');
// for (i = 0; i < checkcities.length; i++) {
//     if (city === checkcities[i]) {
//         console.log('its a cleanest city');
//     }
// }
// var cityToCheck = prompt('enter your city');
// var matchFound = "no";
// for (var i = 0; i <= cleanestCities.length; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = "yes";
//     alert("It's one of the cleanest cities");

// }
// if (matchFound === "no") {
//     alert("It's not on the list");

// }

// 1. Declare Variables and Log to Console
//    Declare variables of different types (string, number, boolean) and log them to the console.

// var stdName = prompt('Enter your name');
// var stdAge = +prompt('Enter your Age');
// var isStudent = true;
// console.log(stdName,stdAge, isStudent);

// 2. Basic Arithmetic Operations
// Write a program to add, subtract, multiply, and divide two numbers.

// var firstNo = +prompt('Enter your first no ');
// var secondNo = +prompt('Enter your second no ');
// var add = firstNo + secondNo;
// var sub = firstNo - secondNo;
// var div = firstNo / secondNo;
// var mult = firstNo * secondNo;

// console.log("addition", add);
// console.log("subtraction", sub);
// console.log("division ", div);
// console.log("multiplication :", mult);

// 3. Odd or Even Number
//    Write a function that checks if a number is odd or even.

// function CheckOddoreven(number) {
//     if (number % 2 === 0) {
//         console.log("its Even no");
//     }
//     else {
//         console.log("its Odd no");

//     }
// }

// CheckOddoreven(+prompt("Enter your number "));

// 4. Find the Length of a String
//    Write a program that outputs the length of a given string.

// function ChecklengthofString(str) {
//     console.log("the length of String is " , str.length);

// }

// ChecklengthofString(prompt('enter a word'));

// 5. String Concatenation
//    Concatenate two strings and print the result.

// function Concatination(str1, str2) {

//     console.log(str1 + "" + str2);

// }
// Concatination(prompt('ENTER YOUR FIRSTNAME'), prompt('ENTER YOUR SECOND NAME '));

// 6. Convert String to Number
//    Convert a string into a number and perform arithmetic operations on it.

// var str1 = 10;
// var str2 = 20;

// var num1 = Number(str1);
// var num2 = Number(str2);

// console.log("addition", num1 + num2);
// console.log("multipication", num1 * num2);
// console.log("subtraction", num1 - num2);

// 7. Simple Conditional Statement(if/else)
//    Create a function that checks if a number is positive, negative, or zero.

// function checkNumber(number) {
//     var number = +prompt('enter a number ')
//     if (number > 0) {
//         console.log("number is positive");
//     }
//     else if (number < 0) {
//         console.log("number is negative");
//     }
//     else {
//         console.log("number is zero");
//     }
// }
// checkNumber()

// 8. Simple Looping(for)
//    Write a program that prints numbers from 1 to 10 using a for loop.

// for (var i = 1; i < 11; i++) {
//     console.log(i);
// }

// 9. Sum of Array Elements
//    Write a program to find the sum of all elements in an array.

// function sumArray (Array) {
//   var sum = 0
//   for (var i = 0; i < Array.length; i++) {
//     sum += Array[i]
//   }
//   console.log('sum of Array elements : ', sum)
// }
// sumArray([10, 12, 32])
// sumArray([10, 22, 21])
// sumArray([10, 12, 12])
// sumArray([+prompt("enter a number1 "),+prompt("enter a number2 ")])

// 10. Reverse a String
//     Write a function that reverses a string manually (without using the reverse() method).

// // Function to reverse a string manually
// function reverseString (str) {
//   let reversed = '' // Initialize an empty string

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i] // Append characters in reverse order
//   }

//   return reversed
// }

// // Test the function
// console.log(reverseString('ali')) // Output: "olleh"
// console.log(reverseString('hasnain')) // Output: "tpircSavaJ"

// function reverseString (str) {
//   var reverse = ''
//   for (var i = str.length; i >= 0; i++) {
//     reverse += str[i]
//   }
//   return reverse

// }

// console.log(reverseString('hello'));

// var fullName = "ali hasnain "
// console.log(fullName);

// function add () {
//   var num1 = 10
//   var num2 = 20
//   console.log(num1 + num2)
// }
// add()

// function sub () {
//   var num1 = 10
//   var num2 = 20
// }
//  console.log(num1 - num2)
// sub()

// function sub () {
//   var num1 = 10
//   var num2 = 20
//   return num1 - num2
// }
// var result = sub()
// console.log(result)

// function sum (num1, num2) {
//   console.log(num1 + num2)
// }
// sum(10, 10) //arrguments

// function sum (num1, num2) {
//   return num1 + num2
// }
// var result = sum(20, 20)
// console.log(result)

// BODMAS RULE

// var i = 1 + 2 * (10 + 1)
// console.log(i)

// var i = 9 + 2+(5 + 2)+(10 * 2)
// console.log(i)

// POST AND PRE increment and decrement

// var num1 = 10
// // num1++
// num1--
// console.log(num1)

// var num1 = 10 ;
// --num1;
//++num1;
// console.log(num1);

// IF/ELSE

// if (1 === 1) {
//   console.log('correct')
// }

// var userName = 'ali'
// if (userName === 'ali') {
//   console.log('match')
// }

// var userName = 'ali'
// if (userName === 'hasnain') {
//   console.log('match')
// }

// var alisFavfriut = 'mango'
// if (alisFavfriut === 'orange') {
//   console.log('ali fav fruit is mango')
// } else {
//   console.log("better luck next time")
// }

// function age () {
//   var age = +prompt('enter your age')
//   if (age >= '18') {
//     console.log('you are eligible for NIC')
//   } else if (age <= 18) {
//     console.log('Not eligible you are under 18 ')
//   }
// }
// age()
