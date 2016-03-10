

hangmanApp.service('wordsService', function() {

    var words = [
        "angry", "application", "ashtray",
        "bed", "black", "book", "button",
        "cable", "candle", "chair", "computer",
        "desk",
        "eggs",
        "finger",
        "grey",
        "hangman", "happy", "head",
        "keyboard",
        "mouse",
        "note",
        "package", "paper", "phone",
        "table", "template", "tomato",
        "user",
        "water", "word" ];

    //var words = [ "aa" ];
    this.selectWord = function() {
        var length = words.length;
        var idx = Math.floor(Math.random() * length);
        return words[idx];
    };

});