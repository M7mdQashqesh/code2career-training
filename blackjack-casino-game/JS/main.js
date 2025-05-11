let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let isBlackjack = false;
let isAlive = true;
let message = "";

document.getElementById("new-card-btn").style.display = "none";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    isBlackjack = true;
    message = "Wow! You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  document.getElementById("new-card-btn").style.display = "block";
  document.getElementById("message").textContent = message;
  document.getElementById("cards").textContent = "Cards: ";
  for (let index = 0; index < cards.length; index++) {
    document.getElementById("cards").textContent += cards[index] + " ";
  }
  document.getElementById("sum").textContent = "Sum: " + sum;

  document.getElementById("start-btn").style.display = "none";
}

function newCard() {
  if (isAlive && isBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    startGame();
  } else {
    document.getElementById("new-card-btn").style.display = "none";
  }
}

function getRandomCard() {
  // 0 -> 0.999 || 0 -> 12.9999 || 0 -> 12 || 1 -> 13
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) {
    return 11;
  } else if (random >= 11) {
    return 10;
  } else {
    return random;
  }
}
