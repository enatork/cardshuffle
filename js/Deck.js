var Deck = function(card){
    var card = card;
    var stack = [];

    var orderBySuit = function(suitArray){
        return makeStack(suitArray);
    };

    var createDeck = function(){
        return makeStack();
    }

    var shuffleDeck = function(){
        return shuffle();
    }

    function shuffle() {
        if(this.stack && this.stack.length === 52) {
            var j, k;
            var temp;

            for (j = 0; j < this.stack.length; j++) {
                k = Math.floor(Math.random() * this.stack.length);
                temp = this.stack[j];
                this.stack[j] = this.stack[k];
                this.stack[k] = temp;
            }
            return this.stack;
        }
        return;
    };

    function makeStack(suitArray){
        var ranks = [ "2", "3", "4", "5", "6", "7", "8", "9",
            "10", "J", "Q", "K", "A"];
        var suits =[];
        this.stack = [];
        if(suitArray && suitArray.length === 4 && suitArray.indexOf("Hearts") != -1 && suitArray.indexOf("Spades") != -1
            && suitArray.indexOf("Diamonds") != -1 && suitArray.indexOf("Clubs") != -1)
        {
            suits = suitArray;
        }
        else{
            suits =["Clubs", "Diamonds", "Hearts", "Spades"];
        }

        for (var j = 0; j < suits.length; j++) {
            for (var k = 0; k < ranks.length; k++) {
                this.stack[j * ranks.length + k] = card.createCard(ranks[k], suits[j]);
            }
        }
        return this.stack;
    };


    return {cards: stack, createDeck: createDeck, shuffleDeck: shuffleDeck, orderBySuit:orderBySuit};
};



