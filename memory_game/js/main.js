console.log("Up and running!");
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];
const cardsInPlay = [];
var playerScore = 0;
var gameTally = 0;

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]){
		confirm("You found a match!");
		//resets cards in play array
		cardsInPlay.length = 0;
		tallyScore('win');
		resetBoard();
	} else {
		alert("Sorry, try again");
		//resets cards in play array
		cardsInPlay.length = 0;
		tallyScore('loss');
		resetBoard();
	}
}


function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);;
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	//if two cards in play check for match
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

//displays cards with back image
function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'card');
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//resets card image to the backside
function resetBoard(){
	var resetElement = document.getElementsByClassName('card');
	var cycleLength = resetElement.length;
	for (var i = 0; i < cycleLength; i++){
		resetElement[i].setAttribute('src', 'images/back.png');
	}
}

//keeps track of players score and games played
function tallyScore (score) {
	if (score == 'win'){
		playerScore++;
	}
	gameTally++;

	if (gameTally === 1) {
		var scoreTally = document.createElement('p');
		scoreTally.textContent = playerScore + " wins of " + gameTally + " games played";
		scoreTally.setAttribute('id', 'scoreboard');
		document.getElementById('game-board').appendChild(scoreTally);
	} else {
	var testt = document.getElementById('scoreboard');
	testt.innerHTML = playerScore + " wins of " + gameTally + " games played";
}

}
createBoard();

/*	if (cardsInPlay.length === 2) {
		console.log("There are 2 cards in play");
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		} else {
			alert("Sorry, try again");
		}
	}
*/
