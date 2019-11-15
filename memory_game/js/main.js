console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}


function flipCard(cardId){
	console.log("User flipped " + cards[cardId]);;
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(1);

/*	if (cardsInPlay.length === 2) {
		console.log("There are 2 cards in play");
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		} else {
			alert("Sorry, try again");
		}
	}
*/
