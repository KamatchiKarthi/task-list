const cardsdata = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];
let flipedcards = [];
let matchedcard = [];

function shufflecards() {
  for (let i = cardsdata.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsdata[i], cardsdata[j]] = [cardsdata[j], cardsdata[i]];
  }
}

shufflecards();

const gameboard = document.getElementById('game-board');

function createcards() {
  cardsdata.forEach((value, index) => {
    const card = document.createElement('div');
    card.setAttribute('id', index);
    card.classList.add('cardback');
    card.textContent = 'X';
    card.classList.add('active');
    gameboard.append(card);
    card.addEventListener('click', flipcard);
    card.addEventListener('dblclick', e => {
      e.preventDefault();
      e.stopPropagation();

      card.addEventListener('mousedown', e => {
        e.preventDefault();
        e.stopPropagation();
      });
    });
  });
}
createcards();

function flipcard() {
  if (flipedcards.length < 2 && this.classList.contains('active')) {
    let cardId = this.getAttribute('id');
    flipedcards.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardsdata[cardId];

    if (flipedcards.length == 2) {
      setTimeout(checkmatch, 1000);
    }
  }
}
function checkmatch() {
  const card1 = flipedcards[0];
  const card2 = flipedcards[1];
  const card1Id = flipedcards[0].getAttribute('id');
  const card2Id = flipedcards[1].getAttribute('id');

  if (cardsdata[card1Id] === cardsdata[card2Id]) {
    card1.style.border = 'none';
    card1.style.backgroundColor = 'rgb(199, 152, 81)';
    card1.innerHTML = '';
    card1.classList.remove('active');
    card2.style.border = 'none';
    card2.style.backgroundColor = 'rgb(199, 152, 81)';
    card2.innerHTML = '';
    card2.classList.remove('active');
    matchedcard.push([flipedcards]);
    gameover();
    card1.removeEventListener('click', flipcard);
    card2.removeEventListener('click', flipcard);
  } else {
    card1.innerHTML = 'X';
    card1.classList.add('cardback');

    card2.innerHTML = 'X';
    card2.classList.add('cardback');
  }

  flipedcards = [];
}

function gameover() {
  if (matchedcard.length === cardsdata.length) {
    while (gameboard.firstChild) {
      gameboard.removeChild(gameboard.firstChild);
    }
    gameboard.innerHTML = 'You Won';
    // gameboard.removeAttribute('game-board');
  }
}
