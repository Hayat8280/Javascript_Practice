document.getElementById("#btnStone").addEventListener("click", playGame('Stone'));
document.getElementById("#btnPaper").addEventListener("click", playGame('Paper'));
document.getElementById("#btnScissors").addEventListener("click", playGame('Scissors'));
document.getElementById("#btnReset").addEventListener("click", resetScore);


let score = {
    win : 0,
    lose : 0,
    tie: 0
}

document.getElementById('result').innerHTML = 'Start the game now!';

let jsonStoredData = localStorage.getItem("score");

if(jsonStoredData != null) {
    score = JSON.parse(jsonStoredData);
}

document.getElementById('score').innerText =
    `Win: ${score.win}\nLose: ${score.lose}\nTie: ${score.tie}`;

function playGame(playerChoice) {
    const choices = ['Stone', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice, choices);
    let result;
    if(playerChoice === computerChoice) {
        result = "It's a draw!";
        ++score.tie;
    } else if(
        (playerChoice === 'Stone' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Stone') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = `You win!`;
        ++score.win;
    } else {
        result = `You lose!`;
        ++score.lose;
    }

    const jsonData = JSON.stringify(score);
    localStorage.setItem("score", jsonData);

    document.getElementById('result').innerText =
    `Your choice: ${playerChoice}\nComputer's choice: ${computerChoice}\n${result}`;

    document.getElementById('score').innerText =
    `Win: ${score.win}\nLose: ${score.lose}\nTie: ${score.tie}`;

    console.log(jsonStoredData);
}

resetScore = () => {
    localStorage.clear("score");
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.getElementById('score').innerText =
    `Win: ${score.win}\nLose: ${score.lose}\nTie: ${score.tie}`;
}