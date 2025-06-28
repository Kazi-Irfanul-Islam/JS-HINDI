let score = "irfan";

// console.log(typeof score);
// console.log(typeof(score));

// converting string to number
let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN means not in number
// true = 1, ,false = 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 -> true;
// 0 -> false
// hitesh -> true;

let num = 33;
let stringNumber = String(num);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ___________operations____________

let value = 3;
let negValue = -value
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 * 2);
console.log(2 ** 3);    // 2 ^ 3
console.log(2 % 3);

let str1 = "hello"
let str2 = " irfan"
let str3 = str1 + str2;

console.log(str3);

console.log(1 + "2");
console.log(typeof(1 + "2")); // string type  

let num1, num2, num3;
num1 = num2 = num3 = 2 + 5;
console.log(num2);

//pre-increment / decrement and post-iincreament / decrement
let counter = 100;
console.log(++counter); 
console.log(counter++);

