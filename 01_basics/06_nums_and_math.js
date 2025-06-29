let score = 400;
console.log(score); 

let balance = new Number(100000.6779979);
console.log(balance);

console.log(balance.toString().length); // converting number into string and counting the length
console.log(balance.toFixed(2)); // 2 numbers after decimal points

// +++++++++++++++ MATHS +++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(3.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 2, 6, 9));
console.log(Math.max(1, 7, 8, 12));

//Random function in math

console.log(Math.random()); // always give numbers between 0 to 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// generate random number in a fixed range

let mn = 10, mx = 20

console.log(Math.floor(Math.random() * (mx - mn + 1)) + mn);
