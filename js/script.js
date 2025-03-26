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
            cardFront.textContent = '?';

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

    function flipCard(clickedCard) {
        if (gameLocked || clickedCard === flippedCards[0] || clickedCard.classList.contains('flipped')) {
            return;
        }
    
        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);
    
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