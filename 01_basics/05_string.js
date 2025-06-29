let name = "irfanul";
let repoCount = 25;

// console.log(name + " " + repoCount + " value"); // bad and outdated way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern and efficient way -> template literal

let gameName = new String("irfanul islam payel");

// console.log(gameName[7]);        // accessing elements index wise
// console.log(gameName.__proto__)

console.log(gameName.length);       // length of the string
console.log(gameName.toUpperCase());// Uppercasing the whole string

console.log(gameName.charAt(3));    // checks character at specific index
console.log(gameName.indexOf('l')); // first index of an particular elements in the array, if not present, return -1;

let newString = gameName.substring(0, 5) // acessing substring
console.log(newString) 

let anotherString = gameName.slice(0, 5); // works same as substring
console.log(anotherString);

let myName = "      Irfan       ";
console.log(myName) // keep all the spaces as it is
console.log(myName.trim()); // excludes all the unnecessary spaces

let url = "https://youtube.com/irfan%20sjnrbv";
console.log(url);
console.log(url.replace('%20', '_REPLACED_')); // replaced substring in a string
console.log(url.includes('irfan')); // checks substring present in the string or not

console.log(gameName.split(' '));