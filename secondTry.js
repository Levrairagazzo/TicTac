

let GameBoard = (() => {

    let turn = 'X';
    const myBoard = new Array(9).fill(null); 

    function nextTurn(){

        GameBoard.turn = GameBoard.turn === 'X' ? '0' : 'X';        
    }
    
    function makePlay(index){

        if(!GameBoard.isInProgress()) return;

        if(GameBoard.myBoard[index]) return; //making sure a box is played only once

        GameBoard.myBoard[index] = GameBoard.turn;

        if(!GameBoard.checkWin()) nextTurn();
    
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

    return {turn, myBoard, makePlay, nextTurn, checkWin};

})();

const onCellClick = function(index){
    console.log(`Cell clicked: ${index}`);
}

const restartClick = function (){

}

let cells = document.getElementsByClassName("gamecell");

    Array.from(cells).forEach(function(cell) {
      cell.addEventListener('click', onCellClick(cell.CDATA_SECTION_NODE.index), {once:true});
    });







