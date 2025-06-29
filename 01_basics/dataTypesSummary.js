// Primitive data Types
// 7 types 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non primitive) data Type
// Array, Objects, Functions

// * Premitive Datatypes

//                   Type                                   typeof

// i)               Number                                    number
// ii)              String                                    string
// iii)             Boolean                                   boolean
// iv)              Bigint                                     bigint
// v)               Symbol                                     symbol
// vi)              Null                                       object
// vii)             Undefined                                  undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                  object
// ii)              Array                                   object
// iii)             Function                                function(object)

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 2345678765434567876542345434543234323433243534343343343324324343343534n
console.log(bigNumber);
console.log(typeof bigNumber);

const heros = ["irfanul", "islam", "payel"];

const myFunction = function(){
    console.log("Hello World ! this is a function in JavaScript");
}

console.log(typeof myFunction);
myFunction(); // printing function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack and heap memory