const user = {
    username : "irfan",
    price : 1000,
    welcomeMessege : function() {
        // console.log(`${this.username}, welcome to website`);
        console.log(this); 
    }
}

user.welcomeMessege();
user.username = "mithila"
user.welcomeMessege();

console.log(this);

function chai() {
    let username = "irfan"
    console.log(this.username);
}

// chai()

// const chai = function () {
//     let username = "irfan"
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "irfan"
//     console.log(this);
// }

// chai();

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => (num1 + num2);

console.log(addtwo(3, 4));


