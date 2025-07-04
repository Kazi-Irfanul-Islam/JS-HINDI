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

let indx = 1;
while(indx <= 10) {
    console.log(`current index is ${indx++}`);
}

let myarr = ["flash", "batman", "superman"];
let i = 0;
while(i < myarr.length) {
    console.log(myarr[i++]);    
}

let num = 1;
while(num < 7) {
    console.log(num++);
}

let calc = 1;

do {
    console.log(`calc value for now is : ${calc}`);
    calc++;
} while(calc <= 10);


// _______________________________________________________________________________________