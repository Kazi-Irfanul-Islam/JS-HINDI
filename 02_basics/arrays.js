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