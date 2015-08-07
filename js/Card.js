
var Card = function(){

    var createCard = function(rank, suit) {

        var returnCard = {
            rank : rank,
            suit : suit,
            printCard : cardToString
            }
        return returnCard;
    };

    function cardToString() {

        var rank, suit;

        switch (this.rank) {
            case "A" :
                rank = "Ace";
                break;
            case "2" :
                rank = "Two";
                break;
            case "3" :
                rank = "Three";
                break;
            case "4" :
                rank = "Four";
                break;
            case "5" :
                rank = "Five";
                break;
            case "6" :
                rank = "Six";
                break;
            case "7" :
                rank = "Seven";
                break;
            case "8" :
                rank = "Eight";
                break;
            case "9" :
                rank = "Nine";
                break;
            case "10" :
                rank = "Ten";
                break;
            case "J" :
                rank = "Jack"
                break;
            case "Q" :
                rank = "Queen"
                break;
            case "K" :
                rank = "King"
                break;
            default :
                rank = null;
                break;
        }

        switch (this.suit) {
            case "Clubs" :
                suit = "Clubs";
                break;
            case "Diamonds" :
                suit = "Diamonds"
                break;
            case "Hearts" :
                suit = "Hearts"
                break;
            case "Spades" :
                suit = "Spades"
                break;
            default :
                suit = null;
                break;
        }

        if (rank == null || suit == null)
            return "";

        return rank + " of " + suit;
    }

    return {createCard:createCard};
}