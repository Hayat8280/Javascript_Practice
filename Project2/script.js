let score = {
    'win':0,
    'lose':0,
    'tie':0
}

let jsonStoredData = localStorage.getItem('score');

if (jsonStoredData != null) {
    score = JSON.parse(jsonStoredData);
}

document.getElementById('score').innerHTML =
`Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;

function playGame(userChoice) {
    let botChoice, msg;
    let player1, player2;

    if(Math.random() < 1/3) {
        botChoice = 'rock';
        player2 = '✊';
    } else if (Math.random() < 2/3) {
        botChoice = 'paper';
        player2 = '✋';
    } else {
        botChoice = 'scissors';
        player2= '✌️';
    }

    if(userChoice === botChoice) {
        msg = 'It\'s a tie';
        ++score.tie;
    } else if(
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        msg = 'You win!';
        ++score.win;
    } else {
        msg = 'You lose!';
        ++score.lose;
    }

    document.getElementById('result').innerHTML = msg;
    
    player1 = document.getElementById(userChoice).innerHTML;

    document.getElementById('show-choice').innerHTML =
    `You <span style="font-size:50px">${player1}</span>
    <span style="font-size:50px">${player2}</span> Computer`;

    jsonStoredData = JSON.stringify(score);
    localStorage.setItem('score', jsonStoredData);

    document.getElementById('score').innerHTML =
    `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function resetScore() {
    localStorage.clear('score');
    score.win = score.lose = score.tie = 0;
    document.getElementById('score').innerHTML =
    `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}