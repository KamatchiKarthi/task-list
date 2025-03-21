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

// const a = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve([1, 2, 3, 3, 4]);
//   }, 5000);
// });

// a.then(result => {
//   console.log('result is', result);
// })
//   .catch(error => {
//     console.log('error is', error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// async function finalcall() {
//   let last = await a;
//   console.log(last);
// }
// finalcall();

// try {
//   console.log('succes');
// } catch {
//   console.log(error);
// }
// console.log('final');

// let urr = 'https://jsonplaceholder.typicode.com/todos/';

// fetch(urr)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// async function getdata() {
//   let last = await fetch(urr);
//   let result = await last.json();
//   console.log(result);
// }

// async function getdata() {
//   try {
//     let last = await fetch(urr);
//     let result = await last.json();
//     console.log(result);
//   } catch (error) {
//     console.log('error');
//   }
// }
// getdata();
// console.log('completed');

// let urii = 'https://tasks-fs.onrender.com/todos';
// let createuii = "https://tasks-fs.onrender.com/todos/create"

// fetch(createuii, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body:JSON.stringify({
//     id :3,
//     title: "fix headers"
//   })
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// let book = {
//   title: 'vijay',
//   authro: 'thalapathy',
//   info: function () {
//     console.log(`${this.title} by ${this.authro}`);
//   },
// };

// book.info();
document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.querySelector('.game-board');
  const restartButton = document.getElementById('restartButton');
  let cards = [];
  let flippedCards = [];
  let gameLocked = false;

  // Array of card values (pairs)
  const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let totalPairs = cardValues.length;
  let pairsFound = 0;

  function createCards() {
      // Double the card values to create pairs
      const duplicatedValues = [...cardValues, ...cardValues];
      // Shuffle the array
      shuffleArray(duplicatedValues);

      cards = duplicatedValues.map(value => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.dataset.value = value;

          const cardInner = document.createElement('div');
          cardInner.classList.add('card-inner');

          const cardFront = document.createElement('div');
          cardFront.classList.add('card-front');
          cardFront.textContent = 'X';

          const cardBack = document.createElement('div');
          cardBack.classList.add('card-back');
          cardBack.textContent = value;

          cardInner.appendChild(cardFront);
          cardInner.appendChild(cardBack);
          card.appendChild(cardInner);
          card.addEventListener('click', flipCard);
          return card;
      });
  }

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  function renderBoard() {
      gameBoard.innerHTML = '';
      cards.forEach(card => {
          gameBoard.appendChild(card);
      });
  }

  function flipCard() {
      if (gameLocked || this === flippedCards[0] || this.classList.contains('flipped')) {
          return;
      }

      this.classList.add('flipped');
      flippedCards.push(this);

      if (flippedCards.length === 2) {
          gameLocked = true;
          checkForMatch();
      }
  }

  function checkForMatch() {
      const card1 = flippedCards[0];
      const card2 = flippedCards[1];

      if (card1.dataset.value === card2.dataset.value) {
          // Match found
          card1.removeEventListener('click', flipCard);
          card2.removeEventListener('click', flipCard);
          flippedCards = [];
          gameLocked = false;
          pairsFound++;
          if (pairsFound === totalPairs) {
              alert('Congratulations! You found all the pairs!');
          }
      } else {
          // No match
          setTimeout(() => {
              card1.classList.remove('flipped');
              card2.classList.remove('flipped');
              flippedCards = [];
              gameLocked = false;
          }, 1000); // Flip back after 1 second
      }
  }

  function restartGame() {
      flippedCards = [];
      gameLocked = false;
      pairsFound = 0;
      createCards();
      renderBoard();
  }

  restartButton.addEventListener('click', restartGame);

  // Initial game setup
  createCards();
  renderBoard();
});