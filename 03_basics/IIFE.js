
// 🧠 What is an IIFE (Immediately Invoked Function Expression) in JavaScript?
// IIFE stands for Immediately Invoked Function Expression.

// It is a JavaScript function that:
// Is defined and
// Immediately executed (called) after its creation.

(function () {
    console.log("This is an IIFE");
    
})(); // immidiately prints the log

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🔧 Variants of IIFE
// 1. With parameters:
(function(name) {
    console.log(`Hello, ${name}`);
})("irfan");

// 2. Arrow function version:
(() => {
    console.log("this is an IIFE");
    
})();