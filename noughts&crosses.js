//this will be the js for the the n and s game
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winConditions =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["","","","","","","","",""];
//this is an array of place holders for the game, 9 empty strings, one for each cell
let currentPlayer = "X";
// tracks current player
let running = false;
///boolean variable keeps track if the game is running, will switch to true when we initialise our game

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    //this allows for each cell to be clicked in js
    restartButton.addEventListener("click",restartGame);
    //this allows for the restart button to work and restart the game by adding the event listener and the click
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
    
}
function cellClicked(){
const cellIndex = this.getAttribute("cellIndex");
//this, refers to any cell we click on 

if (options[cellIndex] != "" || !running){
    return;
}
   updateCell(this, cellIndex);
   checkWinner();
}

function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    // : is otherwise
    // ? is is a one-line shorthand for an if-else statement. It's called the conditional operator.
    statusText.textContent = `${currentPlayer}'s turn`;
    // this allows us to switch players
}
function checkWinner(){
let roundWon = false;

for (let i = 0; i < winConditions.length; i++){
    
}
}

function restartGame(){

}