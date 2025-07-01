function sayMyName() {
    console.log("i");
    console.log("r");
    console.log("f");
    console.log("a");
    console.log("n");
}

sayMyName();

// Adding two Numbers 

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 2));

function userLogin(username = "user") {
    if(!username) {
        console.log("please enter a username : ");
        return;
    }
    return `${username} just logged in.`;
} 

console.log(userLogin("IRFAN"));

// for giving infinity amount of parameter we use ...
function calculateCartPrice (... num1) {
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500, 600, 100));


// objects in function

const user = {
    username : "irfan",
    prices : 1000000,
}

function handleObject(anyObject) {
    console.log(`Username is : ${anyObject.username}, Price is : ${anyObject.prices}`);
}
handleObject(user);
handleObject({username : "irfan", prices : 100});

let arr = [100, 300, 500, 200, 3000, 69];

function returnSecondElement(arr) {
    return arr[1];
}

console.log(returnSecondElement(arr));
console.log(returnSecondElement([11, 22, 33, 44, 55, 66, 77, 88]));



