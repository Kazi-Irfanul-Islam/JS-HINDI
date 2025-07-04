// // for

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop value : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`inner loop value : ${j}`);
//   }
// }

// // let myarr = ["flash", "batman", "superman"];

// for (let i = 0; i < myarr.length; i++) {
//   let val = myarr[i];
//   console.log(val);
// }

// // break and continue 

// for(let i = 0; i <= 20; i++) {
//     if(i == 5) {
//         console.log(`detected ${i}, so this will break the loop`);
//         break;
//     }
//     console.log(`value of index is ${i}`);
// }

// for(let i = 0; i <= 20; i++) {
//     if(i == 5) {
//         console.log(`detected ${i}, so ${i} will not be printed`);
//         continue;
//     }
//     console.log(`value of index is ${i}`);
// }


// ____________________________________________________________________________________

// while and do-while loop 

// let indx = 1;
// while(indx <= 10) {
//     console.log(`current index is ${indx++}`);
// }

// let myarr = ["flash", "batman", "superman"];
// let i = 0;
// while(i < myarr.length) {
//     console.log(myarr[i++]);    
// }

// let num = 1;
// while(num < 7) {
//     console.log(num++);
// }

// let calc = 1;

// do {
//     console.log(`calc value for now is : ${calc}`);
//     calc++;
// } while(calc <= 10);


// _______________________________________________________________________________________
// for of 

// let arr = [1, 2, 3, 4, 5];

// for(let num of arr) {
//     console.log(num);
// }

// const greetings = "hello world";

// for(const x of greetings) {
//     console.log(x);
// }


// // maps 

// const map = new Map();
// map.set("IN", "India");
// map.set("BAN", "Bangladesh");
// map.set("USA", "United States Of America");
// map.set("BAN", "Bangladesh");

// // console.log(map);

// for(let [key, value] of map) {
//     console.log(`full form of ${key} is : ${value}`);
// }


// const obj = {
//     ff : "nfa",
//     ss : "dfa"
// }

// // for(let [key, value] of obj) {
// //     console.log(key);
// //     console.log(value);
// // } 

// // can not possible because object is not iterable
// // so how we can do that? let's see

// const myobj = {
//     js : "javascript",
//     cpp : "c++",
//     py : "python",
//     rb : "ruby"
// }

// for(let key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);
// }

// const programming = ["js", "py", "c++", "java"];

// for(const key in programming) {
//     console.log(programming[key]);
// }

// const mapp = new Map();
// mapp.set("IN", "India");
// mapp.set("BAN", "Bangladesh");
// mapp.set("USA", "United States Of America");
// mapp.set("BAN", "Bangladesh");

// for(const key in mapp) {
//     console.log(mppp[key]);
// }



// _____________________________________________________________________________________________
// for each 

const chaiAurCode = ["js", "py", "c++", "java"];

// chaiAurCode.forEach(function (val){
//     console.log(val);
// })

chaiAurCode.forEach((item) => {
    console.log(item);
} )

const mycoding = [
    {
        languageName : "html",
        languageFileName : "html"
    }, 
    {
        languageName : "javascirpt",
        languageFileName : "js"
    },
    {
        languageName : "c plus plus",
        languageFileName : "cpp"
    }
]

mycoding.forEach( (item) => {
    console.log(`Language Name is : ${item.languageName} ||| and language file name ends with ${item.languageFileName}`);
})

const cdd = ["js", "ruby", "java", "python", "'cpp"];

// const values = cdd.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const newNums = mynums.filter( (num) => {
//     return num > 4;
// })

// console.log(newNums);

const newnums = []

mynums.forEach( (num) => {
    if(num > 4) {
        newnums.push(num);
    }
})

console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbooks = books.filter( (bk) => bk.genre === 'history');

 userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
 })

 console.log(userbooks);
 

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14]

const ans = mynum.map( (num) => {return num + 10});
console.log(ans);

const newNums = mynum.map((num) => num * 10).map((num) => num + 1).filter( (num) => num >= 40)
console.log(newnums);




// 💡 What is .reduce()?
// The .reduce() function processes each element of an array and reduces it to a single value.


const nambar = [1, 2, 3];

const myTotal = nambar.reduce(function (acc, currVal) {
    console.log(`acc is : ${acc} and currval is : ${currVal}`);
    return acc + currVal;
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

// 🧠 How Reduce Works Internally:
// Step	      acc (Accumulator)	item.price	New acc
// 1	            0	            2999	2999
// 2	            2999	        999	    3998
// 3	            3998	        5999	9997
// 4	            9997	        12999	22996
