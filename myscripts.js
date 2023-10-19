
console.log("Hello World");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function playRound(computerSelection, mySelection) {
    let computerS = computerSelection.toLowerCase();
    let myS = mySelection.toLowerCase();
    let winner = null;
    
    if (computerS === myS) {
        return 'draw';
    }
    else if (computerS === 'rock') {
        switch(myS) {
            case 'paper':
                winner = 'player';
                break;
            case 'scissor':
                winner = 'computer';
                break;    
        } 
    }
    else if (computerS === 'paper') {
        switch(myS) {
            case 'rock':
                winner = 'computer';
                break;
            
            case 'scissor':
                winner = 'player';
                break;
        }
    }
    else if (computerS === 'scissor') {
        switch(myS) {
            case 'rock':
                winner = 'player';
                break;
            
            case 'paper':
                winner = 'computer';
                break;
        }
    }

    return winner;
    }

    function game() {
        console.log("New game initialised.");
        let playerWinLog = 0;
        let computerWinLog = 0;

        while (playerWinLog < 5 && computerWinLog < 5) {
            console.log("Round begins. Select from the following options: 'rock', 'paper', 'scissor'.")
            let playerChoice = prompt("Type in your choice: ");
            let computerChoice = getComputerChoice();
            console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}`);

            winner = playRound(playerChoice, computerChoice);

            if (winner === 'draw') {
                console.log('Round draw, no winners');
                continue;
            }
            else if (winner === 'computer') {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
                computerWinLog++;
                continue;
            }

            else {
                console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
                playerWinLog++;
                continue;
            }

            console.log(`Scoreboard: Computer won ${computerWinLog} rounds, You win ${playerWinLog} rounds.`)
        }
        
        computerWinLog == 5 ? console.log('You lost the match.') : console.log('You won the match!');
        replay = prompt("Play again? Y/N")
        if (replay === "Y") {
            game();
        }
        else {
            console.log('Okay, goodbye!')
        }
    }

game();