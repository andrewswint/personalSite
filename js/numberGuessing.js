
    let game = {
        "min": 1,
        "max": 10
    };

    document.addEventListener("DOMContentLoaded", function(){
        game.output = document.querySelector(".output");
        game.message = document.querySelector(".message");
        game.guessInput = document.querySelector("input");
        game.btn = document.querySelector("button");
        game.btn.addEventListener("click", guessValue);
        init();
    });

    let guess = game.guesses;
    var width = -1;
    function move () {
        var elem = document.getElementById("myBar");
        if (width < 100) {
            width += 1;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            if (width === 100) {
                document.getElementById("container").innerHTML= `
                    <p>Game Over!</p>
                    <button id="restart">Restart</button>`;
                document.getElementById("restart").addEventListener("click", function () {
                    window.location.reload();
                });
            }
        }
    }
    move(guess);

    function guessValue() {
        if (game.btn.classList.contains("replay")){
            init();
            game.btn.innerHTML = "Guess";
            game.guessInput.style.display = "block";
            game.btn.classList.remove("replay");
        }
        game.guesses++;
        let tempGuess = game.guessInput.value;
        game.guessInput.value = "";
        tempGuess = parseInt(tempGuess);
        if (isNaN(tempGuess)) {
            message(`Welcome to my guessing game! Guess a number from 1 to ${game.max}...`, "purple");
            game.guessInput.style.borderColor = "purple";
        } else if (tempGuess === game.num){
            message(`You got it! The number was ${game.num}! You got it in ${game.guesses} guesses.`, "green");
            game.guessInput.style.borderColor = "green";
            gameOver();
        } else if (tempGuess < game.num){
            message(`${tempGuess} is too low. Try again...`, "blue");
            game.guessInput.style.borderColor = "blue";
            move(guess);
        } else if (tempGuess > game.num){
            message(`${tempGuess} is too high. Try again...`, "red");
            game.guessInput.style.borderColor = "red";
            move(guess);
        }
    }


    function gameOver () {
        game.btn.innerHTML = "Restart Game";
        game.guessInput.style.display = "none";
        game.btn.classList.add("replay");
        game.max+=5;
    }

    function init(){
        game.guesses = 0;
        game.num = randomNum(game.min, game.max);
        let tempMes = "Welcome to my guessing game! Guess a number from 1 to 10...";
        message(tempMes, "purple");
    }

    function randomNum (min, max) {
        return Math.floor(Math.random()*(max-min + 1) + min);
    }

    function message (mes,clr){
        game.message.innerHTML= mes;
        game.message.style.color = clr || "black";
        game.btn.style.backgroundColor = clr || "black";
        game.btn.style.color = "white";
    }
