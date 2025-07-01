
const mySym = Symbol("key1");

const JsUser = {
    name : "irfan",
    "full name" : "irfanul islam",
    [mySym] : "mykey1",
    age : 18,
    location : "feni",
    email : "irfan01851@gmail.com",
    isLoggedIn : false,
    lastDayOfLoggedIn : ["Monday", "Tuesday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "irfanulislam";
// Object.freeze(JsUser);       // it freezes the updates of the objects
JsUser.email = "irfan_ul_haque";
console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("hello ir_fun");
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// 🧠 Summary
// | Concept                         | Description                                     |
// | ------------------------------- | ----------------------------------------------- |
// | Object literal                  | Creates an object with key-value pairs          |
// | Symbol key                      | Hidden, unique, non-enumerable key              |
// | Dot vs Bracket access           | Brackets needed for keys with spaces or symbols |
// | `Object.freeze()`               | Makes the object immutable                      |
// | Method definition               | Adds functions as object properties             |
// | `this` keyword                  | Refers to the current object                    |
// | Return value of `console.log()` | Always `undefined`                              |





// _____________________________________________________________________________________________


const appUser = {};

appUser.id = "123456765";
appUser.name = "irfanul islam payel";
appUser.loggin = false;

console.log(appUser);

let regularUser = {
    email : "mymail@email.com",
    name : {
       fullname : {
        firstname : "irfan", 
        lastname : "islam"
       } 
    }
}

// nested object access
console.log(regularUser.name.fullname.firstname);

// combining objects

let obj1 = {1 : "a", 2 : "b"}
let obj2 = {3 : "c", 4 : "d"}
let obj3 = {5 : "e", 6 : "f"}

let obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


const me = [
    {
        id : 1, 
        email : "ira"
    }, 
    {
        id : 2,
        email : "irfnslfn"
    },
]

me[1].email;

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(JsUser.hasOwnProperty('irfan'));


// ++++++++++++++  Object De-structure  ++++++++++++++

// 🧠 What is Object Destructuring in JavaScript?
// Object destructuring is a concise way to extract properties from an object and assign them to variables

let obj = {
    name : "irfan", 
    age : 22
}

let {name, age} = obj;
console.log(name, age);

// here name and age are directly extracted from obj
// the variable name must match the keys in the object


// ✅ 2. Destructuring with Renaming
// You can rename the variable if needed:

const course = {
    courseName : "javascript",
    price : "1000"
};

const {courseName : subject, price : cost} = course;
console.log(subject, cost); 


// ✅ 4. Nested Object Destructuring
let user = {
    name : "payel",
    address : {
        city : "feni", 
        country : "Bangladesh",
    },
}

const {address : {city, country}} = user;
console.log(city, country);


// ✅ Real World Example
const response = {
    status : 200,
    data : {
        user : {
            amar_nam : "irfan",
            amar_boyosh : 24,
        }
    }
}

const {
    data : {
        user : {amar_nam, amar_boyosh}
    }
} = response;

console.log(amar_nam, amar_boyosh);
