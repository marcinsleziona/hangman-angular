

hangmanApp.service('wordsService', function() {

    var words = [
        "bed", "black", "book", "button",
        "cable", "candle", "chair", "church", "computer",
        "desk",
        "eggs",
        "finger", "flat",
        "green", "grey",
        "happy", "hamster", "head", "house",
        "mouse",
        "paper", "pasta", "phone", "place", "potato",
        "red",
        "table", "tomato", "tower",
        "yellow",
        "water", "white", "word" ];

    //var words = [ "aa" ];
    this.selectWord = function() {
        var length = words.length;
        var idx = Math.floor(Math.random() * length);
        return words[idx];
    };

});