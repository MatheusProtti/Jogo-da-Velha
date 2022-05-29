document.addEventListener('DOMContentLoaded', () =>{

    let quadrados = document.querySelectorAll(".campo");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', maoClick);
    })
})

let player1Wins = document.getElementById("player1Wins");
let player2Wins = document.getElementById("player2Wins");
player1Wins.innerHTML = "Player 1 = " + scorep1;
player2Wins.innerHTML = "Player 2 = " + scorep2;


function maoClick(event){
    //console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(playerMove(position)){
        
        setTimeout(() => {
            if(symbols[playerTime] == "o"){
                alert("O Jogador Vencedor Foi -> O");
                player1Wins.innerHTML = "Player 1 = " + (scorep1 += 1);
                updateSquares()
            }else {
                alert("O Jogador Vencedor Foi -> X");
                player2Wins.innerHTML = "Player 2 = " + (scorep2 += 1);
                updateSquares()
            }

        }, 10)

    };
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll(".campo");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
    
}

//function updateSquare(position){
    //let square = document.getElementById(position.toString());
    //let symbol = board[position];
    //square.innerHTML = `<div class='${symbol}'></div>`
//}
// da pra usar a função pdateSquare(position) tmb ao inves de updateSquares()
