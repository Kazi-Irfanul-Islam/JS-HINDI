// if
// const isUserLoogedIn = true;
// const temparature = 41;

// if (temparature === 40) {
//   console.log("less than 40");
// } else {
//   console.log("temparature is greater than 50");
// }

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`user power ${power}`);
// }

// console.log(`user power : ${power}`);

// const balance = 1000;
// // if(balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}

// +++++++++++++++++ SWITCH CASE ++++++++++++++++++++

//  template
// switch(key) {
//   case value :
//   break;
//   default :
//   break;
// }

const month = "march";

switch (month) {
  case "january":
    console.log("january");
    break;

  case "february":
    console.log("febraury");
    break;

  case "march":
    console.log("march");
    break;

  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}

// +++++++++++++ TRUTHY ++++++++++++++++

const userEmail = [];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have user email");
}

// falsy value
// flase, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function () {};

if (userEmail.length === 0) {
  console.log("Array is Empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??) : null, undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10
// val = undefined ?? 15;
val = null ?? 10 ?? 20;
console.log(val);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
