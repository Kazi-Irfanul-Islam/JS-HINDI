let date = new Date();

console.log(typeof date);
console.log(date);
console.log(date.toString());           // Returns a human-readable string representing the full date and time
console.log(date.toLocaleString());     // Returns a localized string of the date and time based on the system’s locale settings

// summary of differences : 
// | Method                  | Output Style            | Locale Sensitive | Use Case               |
// | ----------------------- | ----------------------- | ---------------- | ---------------------- |
// | `date.toString()`       | Full readable format    | ❌ No             | Debugging or logs      |
// | `date.toLocaleString()` | Localized date/time     | ✅ Yes            | User interface display |
// | `date`                  | Raw object → ISO string | ❌ No             | Default serialization  |

// declaring dates
// let newDate = new Date(2023, 0, 23);
// let newDate = new Date(2023, 0, 23, 5, 3);
// let newDate = new Date("2023-01-15");
let newDate = new Date("01-14-2025");
console.log(newDate.toLocaleString());

let curr_date = Date.now();
console.log(curr_date);

console.log(newDate.getTime());
console.log(Math.floor(Date.now()));

let curr = new Date();
console.log(curr);
console.log(curr.getMonth() + 1); // returns current months of the year
console.log(curr.getDay()); // It returns an integer between 0 and 6 representing the day of the week, starts from sunday