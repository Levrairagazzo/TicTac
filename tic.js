//Global variables

let cells = document.getElementsByClassName("gamecell");



//GameBoard module
const gameBoard = (() => {


    const gameArray = Array(9).fill(null); //Array of null elements
  
    const print = () => {
      for (let i = 0; i < 3; i++) {
        console.log(myBoard[i]);
      }
    }
    return {print, gameArray}
  
  })();
  
//Player factory
  const Player = (symbol) => {
    let getSymbol = () => symbol;
  
    return {getSymbol};
  }

  const playerO = Player('O');
  const playerX = Player('X');
  let currentPlayer = playerX;

  const switchPlayer = function(){
    if (currentPlayer.getSymbol() === 'O')
        currentPlayer = playerX;
    else
        currentPlayer = playerO;
    
  }

 

 


  
//Display symbol by clicking
  let displaySymbol = function(){
    this.innerHTML = currentPlayer.getSymbol();
    switchPlayer();
  }

  const startGame = () => {
    Array.from(cells).forEach(function(cell) {
      cell.innerHTML = '';
      cell.addEventListener('click', displaySymbol, {once:true});
    });

    currentPlayer = playerX;
  }

  startGame();
  
  

 

 