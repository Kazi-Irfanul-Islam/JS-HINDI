// ✅ Promise 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task in completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

// ✅ Promise 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 is resolved");
});

// ✅ Promise 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "irfan", email: "irfan@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// ✅ Promise 4 (FIXED!)
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // 🔁 CHANGE this to false to see the output
    if (!error) {
      resolve({ username: "irfan", email: "ir@example.com" });
    } else {
      reject("ERROR: Something went wrong"); // 🔁 ADD this to handle error
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error); // 🔁 FIXED: was `err` but you logged `error`
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// ✅ Promise 5 (Async/Await)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false; // 🔁 CHANGE this to true to test error
    if (!error) {
      resolve({ username: "irfan", email: "irfan@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response); // 🔁 You forgot to log response
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// ✅ fetch() call with proper error handling
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); // 🔁 FIXED: typo `eror` -> `error`
  });
