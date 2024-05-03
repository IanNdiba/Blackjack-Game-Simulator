const generateDeck = () => {
  //Initializing an empty deck Array
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const pointsCalc = (hand) => {
  let points = 0;
  for (let cardObj of hand) {
    //check if queen, jack, or king
    //values will be 10 for al
    if (
      cardObj.card === "Jack" ||
      cardObj.card === "Queen" ||
      cardObj.card === "King"
    ) {
      points += 10;
    } else if (cardObj.card === "Ace") {
      //check if ace
      //Ace value is 1
      points += 1;
    } else {
      //else card value is the number
      points += Number(cardObj.card);
    }
  }
  return points;
};

const myDeck = generateDeck();

//Creating the player and dealer hands
const playerHand = [];
const dealerHand = [];

//Picking cards
playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log(`Here are the cards in your playerHand:`, playerHand);
console.log(`Here are the cards in your dealerHand:`, dealerHand);

console.log("Starting Player Score: ", pointsCalc(playerHand));
console.log("Starting Dealer Score: ", pointsCalc(dealerHand));

while (true) {
  //deal player card
  playerHand.push(drawCard(myDeck));
  //check if player bust (points over 21)
  const playerScore = pointsCalc(playerHand);
  let dealerScore = pointsCalc(dealerHand);
  if (playerScore > 21) {
    console.log(`You loose! Its a bust! Your final score is ${playerScore},                                   
        while the dealer had ${dealerScore} points`);
    break;
  }

  //Check if player hits 21 points
  if (playerScore === 21) {
    console.log(`You Win!! Your final score was ${playerScore}, 
    while the dealer had ${dealerScore}`);
    break;
  }

  //deal dealer card
  dealerHand.push(drawCard(myDeck));
  //check if dealer is bust
  dealerScore = pointsCalc(dealerHand);
  if (dealerScore > 21) {
    console.log(`You Win! Your final score was ${playerScore}, 
    while the dealer has ${dealerScore} points`);
    break;
  }

  //check if dealer hits 21 points
  if (dealerScore === 21) {
    console.log(`You Loose! Your final score was ${playerScore}, 
    while the dealer has ${dealerScore}`);
  }
}

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", pointsCalc(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", pointsCalc(dealerHand));
