// Sum all the array elements by using a loop.
let Arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < Arr.length; i++) {
  sum += Arr[i];
}
console.log(sum);

// Reverse the array by using a loop.

let num1 = [1 , 2 , 3 , 4 , 5];
let Reverse = [];
for ( let i = num1.length - 1; i >= 0; i--){
    Reverse.push(num1[i]);
}
console.log(Reverse);



// Make a table of the given number with all possible loops.

let number = 2;
for (let i = 1; i <= 10; i++) {
  result = i * number;
  console.log(`${number} * ${i} = ${result} `);
}

// Find the largest number in an array.

let num = [1, 3, 6, 9, 15];
let largest = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > largest) largest = num[i];
}
{
  console.log(largest);
}

// Find the smallest number in an array.
let num2 = [1, 3, 6, 9, 15];
let smallest = num2[0];
for (let i = 1; i > smallest.length; i++) {
  if (smallest > num2[i]) smallest = num2[i];
}
{
  console.log(smallest);
}

// Make an array to store the name of 5 students and iterate with for and foreach loop.
let students = ["Ali", "Ahmad", "Hassan", "Kaleem", "farhan"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// // Make an object to store the information of a student and iterate with a for-in loop.

// let studentInfo = ["Ali", "Ahmad", "Hassan", "Kaleem", "farhan"];
// for (let element in studentInfo) {
//   console.log(studentInfo[element]);
// }
