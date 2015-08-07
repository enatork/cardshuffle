var ViewCtrl = function(){

    var deck = new Deck(new Card());

    function appendToDocument(stack){
        var ele = document.getElementById("cardStack");
        ele.innerHTML = "";
        for(var x =0; x < stack.length; x++)
        {
            var node = document.createElement("li");
            var text = document.createTextNode(stack[x].printCard())
            node.appendChild(text);
            ele.appendChild(node)
        }

    }

    var shuffle = function(){
        var d = deck.shuffleDeck();
        if(d) {
            appendToDocument(d);
        }
        else
        {
            var ele = document.getElementById("cardStack");
            ele.innerHTML = "there is no deck";
        }
    };

    var createDeck = function(){
        var d = deck.createDeck();
        appendToDocument(d);
    };

    var orderBySuit = function(){
        var array = [document.getElementById("order1").value, document.getElementById("order2").value, document.getElementById("order3").value,document.getElementById("order4").value];
        var d = deck.orderBySuit(array);
        appendToDocument(d);
    };

    return {shuffle:shuffle, createDeck:createDeck, orderBySuit: orderBySuit}
}