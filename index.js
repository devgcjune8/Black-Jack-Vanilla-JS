let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Christian June",
  chips: 888
};

let playerEl = document.querySelector("#player-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

// showing the player name and chips
playerEl.textContent = player.name + ": $" + player.chips;

// function to generate random cards
function getRandomCards() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  // if 1     -> return 11
  if (randomCard === 1) return 11;
  // if 11-13 -> return 10
  if (randomCard === 11 || randomCard === 12 || randomCard === 13) return 10;

  return randomCard;
}

function startGame() {
  console.log("StartGame clicked!");
  isAlive = true;
  let firstCard = getRandomCards();
  let secondCard = getRandomCards();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCards() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  let card;
  if (isAlive && !hasBlackJack) {
    card = getRandomCards();
    sum += card;
    cards.push(card);
  }
  renderGame();
}
