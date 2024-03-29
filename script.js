var playerScore = 0;
var compScore = 0;

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function(e){
    document.getElementById("results").textContent = playRound('Rock');
    endGame();
});
const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function(e){
    document.getElementById("results").textContent = playRound('Paper');
    endGame();
});
const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function(e){
    document.getElementById("results").textContent = playRound('Scissors');
    endGame();
});

function generateMove(){
    randomNum = Math.floor((Math.random() * 3) + 1);
    switch(randomNum){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection){
    var computerSelection = generateMove();
    if (playerSelection == computerSelection){
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return "You both rolled "+playerSelection+"! It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        compScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You lose!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        compScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        compScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        document.getElementById("score").textContent = "Player: "+playerScore+", Computer: "+compScore;
        return playerSelection+" vs. "+computerSelection+"! You win!";
    }
}

function endGame(){
    if (playerScore == 5){
        alert("YOU WIN THE GAME");
        playerScore = 0;
        compScore = 0;
    } else if (compScore == 5){
        alert("YOU LOSE THE GAME");
        playerScore = 0;
        compScore = 0;
    }
}