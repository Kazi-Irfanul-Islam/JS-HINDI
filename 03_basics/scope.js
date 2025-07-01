let a = 300
if(true) {
    let a = 10, b = 20
    console.log(a);
}

console.log(a);

function one() {
    const username = "irfan"

    function two() {
        const website = "youtube"
        console.log(website);
        console.log(username);
    }

    two();
}

one();
// console.log(website);


// ++++++++++++++++++++ interesting ++++++++++++++++++++++==


console.log(addone(5));

function addone(num) {
    return num + 1;
}


const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(8));
