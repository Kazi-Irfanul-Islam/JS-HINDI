let arr = [0, 1, 2, 3, 4, 5];
let heros =  ["ironman", "naaagraaaj"];

let arr1 = new Array(1, 2, 3, 4);
console.log(arr1[1]);

// push     : appends an element at the end.
// pop      : removes the last element.
// unshift  : inserts at the beginning.
// shift    : removes from the beginning.

arr.push(6);
arr.push(7);
arr.push(8);
arr.pop();

// join()   : turns the array into a string like "0,1,2,3".
let arr3 = arr.join();
console.log(arr);
console.log(arr3);

// includes : checks if the element exists.
// indexOf  : returns index of the element, 0 based.
console.log(arr.includes(6));
console.log(arr.indexOf(4));


// +++++++++++     SLICE AND SPLICE    ++++++++++++++

console.log("current array : ", arr);
// ✂️ Slice: Non-destructive

const myn1 = arr.slice(1, 3);
console.log("After slicing : ", myn1);
console.log("After slicing original array : ", arr);
// Does not modify the original array.
// Takes values from index 1 to 3 (but not including index 3).
// So myn1 = [1, 2]
// myArr remains unchanged.

// 🪓 Splice: Destructive

const myn2 = arr.splice(1, 3);
console.log("After splicing : ", myn2);
console.log("After splicing original array : ", arr);
// Modifies the original array.
// Starts at index 1, and removes 3 elements.
// So it removes [1, 2, 3] from myArr and stores it in myn2.

// 🔍 Summary: slice() vs splice()
// | Feature           | `slice(start, end)`   | `splice(start, deleteCount)` |
// | ----------------- | --------------------- | ---------------------------- |
// | Returns           | New array             | Removed elements             |
// | Modifies original | ❌ No                 | ✅ Yes                      |
// | End Index         | Exclusive (`end - 1`) | Count of elements            |


let marvel_heros = ["thor", "ironman", "batman"];
let dc_heros = ["superman", "flash", "me"];

console.log(marvel_heros);
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// concat() merges both arrays into a new array.
let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// ✅ 4. Using spread operator ... to merge arrays
let all_hero = [...marvel_heros, ...dc_heros];
console.log(all_hero);
// ... is the spread operator.
// Also creates a flat merged array.
// Same output as concat(), but often preferred for readability and flexibility.

// Array.isArray -> checks if the value is present in the array or not
console.log(Array.isArray("irfan"));

// Array.from -> converts iterable or array like objects into arrys;
console.log(Array.from("irfan"));

// Array.of -> creates an array from a set of values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


// ✅ Summary
// | Method/Feature    | Purpose                                     |
// | ----------------- | ------------------------------------------- |
// | `push()`          | Adds item(s) at the end (modifies original) |
// | `concat()`        | Merges arrays, returns a new one            |
// | `...spread`       | Merges arrays, flatten 1-level              |
// | `flat(Infinity)`  | Completely flattens nested arrays           |
// | `Array.isArray()` | Checks if a value is an array               |
// | `Array.from()`    | Converts iterables to arrays                |
// | `Array.of()`      | Converts list of values into an array       |
