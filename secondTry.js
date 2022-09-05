

let GameBoard = (() => {

    let turn = 'X';
    let myBoard = new Array(9).fill(null);


    function nextTurn(){

        GameBoard.turn = GameBoard.turn === 'X' ? '0' : 'X';        
    }
    
    function makePlay(index){
        

        if(!GameBoard.isInProgress()) return;
        console.log("Bellow firs return");

        if(GameBoard.myBoard[index]) return; //making sure a box is played only once
        console.log("below second return");
        GameBoard.myBoard[index] = GameBoard.turn;
        console.log("below assignment");

        if(!GameBoard.checkWin()) nextTurn();
        console.log("below last if");
    
    }

    function checkWin(){
        const winningMoves = 
            [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]];

            

            for (const move of winningMoves) {

                const[a, b, c] = move;

                if (GameBoard.myBoard[a] && (GameBoard.myBoard[a] === GameBoard.myBoard[b]
                    && GameBoard.myBoard[a] === GameBoard.myBoard[c])){
                    return move;

            }
                
            }
            return null;
    }

    function isInProgress(){
        return !GameBoard.checkWin() && GameBoard.myBoard.includes(null);
    }

    return {turn, myBoard, makePlay, nextTurn, checkWin, isInProgress};

})();

const onCellClick = function(index, cellClicked){
   GameBoard.makePlay(index);
    update();
}

const resetGame = function (){
    console.log("Game is restarted!")

}

const update = () =>{
    updateTurn();
    updateStatus();
    updateBoard();

}

const updateTurn = () =>{
    document.getElementById("turnUpdate").textContent = `This is ${GameBoard.turn}'s turn.`;
}

const updateStatus = () => {
    let status = 'in progress';

    if(GameBoard.checkWin()){
        status = `${GameBoard.turn} is the winner of this game.`;
    } else if (!GameBoard.isInProgress()){
        status ="It's a tie";
    }

    document.getElementById("winnerUpdate").textContent = status;
    
}




let myTest = document.getElementById('gameBoard');

let cells = document.getElementsByClassName('gamecell');


    myTest.querySelectorAll(".gamecell").forEach(cell => {
    cell.addEventListener("click", () => {
            // cell.innerHTML = '';
            onCellClick(cell.dataset.index, cell)
    
        });
    });
  
    updateBoard = () => {
        const winningMove = GameBoard.checkWin();

        myTest.querySelectorAll(".gamecell").forEach(cell => {
            let cellIndex = cell.dataset.index;
           cell.textContent = GameBoard.myBoard[cellIndex];
           if(winningMove && winningMove.includes(cellIndex)) {
            console.log("Inutile")
           }
        
            });
    
        
    }
updateTurn(); //Initiliasing who's turn it is 


    









