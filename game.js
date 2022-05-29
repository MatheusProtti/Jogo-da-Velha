//iniciar minhas variáveis
let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let scorep1 = 0;
let scorep2 = 0;

let symbols = ['o', 'x'];

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function playerMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = win();
        if(gameOver == false){

            //playerTime = (playerTime == 0) ? 1 : 0;
            // fazer uma verificação se o player time é igual a zero, coloca ?, se isso for verdadeiro 
            //pega o 1 e bota no player time se não bota 0.
            if(playerTime == 0){
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }

    }
    return gameOver;
}

function win(){

    for(let i =0; i < winStates.length; i++){
        let sequencia = winStates[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];

        if( board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                return true;
            }
    }

    return false;
}

function restartGame(){
    board = ['','','','','','','','',''];
    gameOver = false;
    let playerTime = 0;
    if(playerTime = 0){
        playerTime = 1;
    }else{
        playerTime = 0;
    }

    let squares = document.querySelectorAll(".campo");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
    
        if (symbol == "") {
          square.innerHTML = `<div class='${symbol}'></div>`;
        }
      });
}