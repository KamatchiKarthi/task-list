// function favfood(response) {
//   console.log(`your fav food  ${response}`);
// }
// favfood('mutton');

// favfood('fish');

// function favfood(response = 'pls enter the food') {
//   console.log(`your fav food ${response}`);
// }

// function favfood(response) {
//   if (response === undefined) {
//     console.log('enther the food');
//   } else {
//     console.log(`your fav food ${response}`);
//   }
// }
// favfood('mutton');

// function favnum(num) {
//   return num;
// }
// let result =favnum('03');
// console.log( `fav number is  ${result}`);

// let user = 'employee';

// if (user == 'guest') {
//   console.log('login denied');
// } else user == 'employee';
// {
//   console.log('successfully login');
// }

// let myname = 'kamatchi';
// let namesize = length.myname;

// if (namesize > 5) {
//   alert('more than 5');
// } else if (namesize == 5) {
//   alert(' equal to 5');
// } else namesize < 5;
// {
//   alert('less than 5');
// }

// let presentclr = 'red';

// if (presentclr == 'green') {
//   console.log('go');
// } else if (presentclr == 'yellow') {
//   console.log('ready');
// } else if (presentclr == 'red') {
//   console.log('stop');
// }

// let colours = ['yellow', 'green', 'red', 'black', 'violit'];

// for (let i = 0; i < colours.length; i++) {
//   console.log(`my fav color ${colours[i]}`);
// }

// const shoppingList = ["apples", "bananas", "milk", "bread"];

// for (let i = 0; i < shoppingList.length; i++) {
//   console.log(`Item ${i + 1}: ${shoppingList[i]}`);
//   // You could also add logic to mark items as "bought" or remove them.
// }
// Simulating rolling a dice multiple times

// const totaltime = '10';
// for (let i = 0; i < totaltime; i++) {
//   let roll = Math.floor(Math.random() * 2) +5;
//   console.log(` number is ${roll} : `);
// }
// Simulating rolling a dice multiple times
// Creating a simple pattern of stars

const a = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve([1, 2, 3, 3, 4]);
  }, 5000);
});

// a.then(result => {
//   console.log('result is', result);
// })
//   .catch(error => {
//     console.log('error is', error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });



async function finalcall() {
  let last = await a;
  console.log(last);
}
finalcall();
