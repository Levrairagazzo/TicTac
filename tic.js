//Global variables

let cells = document.getElementsByClassName("gamecell");



//GameBoard module
const gameBoard = (() => {
    const myBoard = [
      ['-', '-', 'x'],
      ['-', 'x', '-'],
      ['x', '-', '-']];
  
    const print = () => {
      for (let i = 0; i < 3; i++) {
        console.log(myBoard[i]);
      }
    }

    const userInput = (player, inputColumn, inputRow) => {
        console.log(myBoard[inputColumn][inputRow]);
            if(myBoard[inputColumn][inputRow] === '-')
                myBoard[inputColumn][inputRow] = player.getSymbol();
            else
                console.log('Invalid input');
                
            

    }
  
    return { myBoard, print, userInput}
  
  })();
  
//Player factory
  const Player = (symbol) => {
    let getSymbol = () => symbol;
  
    return {getSymbol};
  }

  const player_ = Player('-');
  const playerx = Player('x');
  let currentPlayer = playerx;

  const switchPlayer = function(){
    if (currentPlayer === player_)
        currentPlayer = playerx;
    else
        currentPlayer = player_;
  }
  

 


  
//Display symbol by clicking
  let displaySymbol = function(){
    this.innerHTML = currentPlayer.getSymbol();
  }

  Array.from(cells).forEach(function(cell) {
    cell.addEventListener('click', displaySymbol);
  });

  

 

 