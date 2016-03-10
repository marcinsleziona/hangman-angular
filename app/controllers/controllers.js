

hangmanApp.controller('HangmanController', function ($scope, wordsService) {

    init();

    function init() {
        $scope.correctLetters=[];
        $scope.wrongLetters=[];
        $scope.lost = false;
        $scope.won = false;
        $scope.counter = 0;

        var word = wordsService.selectWord();
        $scope.letter = "";
        $scope.selectedWord = word;
        $scope.wordToFind = refreshWord($scope.correctLetters, word);
        clearHangman();
        drawHangman(0);
    }

    function refreshWord(correctLetters, word) {
        var wordToFind = [];
        for(var idx = 0, len = word.length; idx < len; idx++) {
            if(isIn(word[idx], correctLetters)) {
                wordToFind.push(word[idx]);
            } else {
                wordToFind.push("_");
            }
        }
        return wordToFind;
    }

    function isIn(letter, lettersArray) {
        for(var idx = 0, len = lettersArray.length; idx < len; idx++) {
            if(lettersArray[idx] == letter) {
                return true;
            }
        }
        return false;
    }

    function clearHangman() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawHangman(element) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.beginPath();

        if(element == 0) {
         context.moveTo(0, 100);
         context.lineTo(100, 100);
        }
        if(element == 1) {
         context.moveTo(0, 100);
         context.lineTo(0, 0);
        }
        if(element == 2) {
          context.moveTo(0, 0);
          context.lineTo(60, 0);
        }
        if(element == 3) {
          context.moveTo(0, 25);
          context.lineTo(25, 0);
        }
        if(element == 4) {
          context.moveTo(60, 0);
          context.lineTo(60, 20);
        }
        if(element == 5) { // head
          context.arc(60, 25, 5, 0, 2*Math.PI, false);
        }
        if(element == 6) { // body
          context.moveTo(60, 30);
          context.lineTo(60, 60);
        }
        if(element == 7) { // left arm
          context.moveTo(60, 30);
          context.lineTo(40, 40);
        }
        if(element == 8) { // right arm
          context.moveTo(60, 30);
          context.lineTo(80, 40);
        }
        if(element == 9) { // left leg
          context.moveTo(60, 60);
          context.lineTo(40, 80);
        }
        if(element == 10) { // right leg
          context.moveTo(60, 60);
          context.lineTo(80, 80);
        }

        context.strokeStyle = "black";
        context.stroke();
    }

    $scope.newWord = function() {
        $scope.correctLetters=[];
        $scope.wrongLetters=[];
        $scope.lost = false;
        $scope.won = false;
        $scope.counter = 0;

        var word = wordsService.selectWord();
        $scope.letter = "";
        $scope.selectedWord = word;
        $scope.wordToFind = refreshWord($scope.correctLetters, word);
        clearHangman();
        drawHangman(0);
    }
    $scope.tryLetter = function() {
        var letter = $scope.letter;
        if(letter) {
            if(isIn(letter, $scope.correctLetters)) { // ignore
                return;
            }
            if(isIn(letter, $scope.wrongLetters)) { // ignore
                return;
            }

            var word = $scope.selectedWord;
            if(isIn(letter, word.split(''))) {
                $scope.correctLetters.push(letter);
            } else {
                $scope.wrongLetters.push(letter);
                drawHangman($scope.wrongLetters.length);
            }
            if($scope.wrongLetters.length >= 10) {
                $scope.lost = true;
            }

            var wordToFind = refreshWord($scope.correctLetters, word);
            $scope.wordToFind = wordToFind;

            if(!isIn("_", wordToFind)) {
                $scope.won = true;
            }
        }
    };
    $scope.gameOver = function() {
        return $scope.lost || $scope.won;
    }
    $scope.youLost = function() {
        return $scope.lost;
    }
    $scope.youWon = function() {
        return $scope.won;
    }

});



