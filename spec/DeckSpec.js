describe("Deck", function(){

    var card;
    var deck;
    beforeEach(function() {
        card = new Card();
        deck = new Deck(card);
    });

    it("should make a new 52 card deck", function(){
        var d = deck.createDeck();
        expect(d.length).toEqual(52);
    });

    it("should make a shuffled 52 card deck", function(){
        var d = deck.shuffleDeck();
        expect(d.length).toEqual(52);
    });

    it("should order suits with Hearts first", function(){
        var d = deck.orderBySuit(["Hearts", "Clubs", "Spades", "Diamonds"]);
        expect(d[0].suit).toEqual("Hearts")
    })
});