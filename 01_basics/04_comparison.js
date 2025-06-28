// comparing 2 different data type is not a good practice
console.log("2" > 1);
console.log("02" > 1); 

// some mysterious behaviour of comparing 2 different dataTypes
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// ===
// checks the value as well as dataTypes 
console.log("2" == 2);
console.log("2" === 2);