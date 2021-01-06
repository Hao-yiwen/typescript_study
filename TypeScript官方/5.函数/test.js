let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return this;
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
console.log(pickedCard);