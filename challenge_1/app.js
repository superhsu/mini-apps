//use multidimensional arrays to create chart 3x for loops
//need to add javascript click handler to listen to event when user clicks; 
//player x and o need to take turns 
//create helper functions to check rows, columns, and diagnols to see if any player has won 


var board = []; 
var firstRow = [];
var secondRow = [];
var thirdRow = []; 
var playerX = 'X';
var playerO = 'O'; 
var moves = 0; 

//board creation 

for (var firstRowEle = 0; firstRowEle < 3; firstRowEle++) {
    firstRow.push(firstRowEle); 
}

for (var secondRowEle = 0; secondRowEle < 3; secondRowEle++) {
    secondRow.push(secondRowEle); 
    }

for (var thirdRowEle = 0; thirdRowEle < 3; thirdRowEle++) {
        thirdRow.push(thirdRowEle); 
    }

board.push(firstRow);
board.push(secondRow); 
board.push(thirdRow); 
console.log(board); 


//helper functions 
var playerxTurn = function (rowIndex, colIndex) {
 if (board[rowIndex][colIndex] !== 'X' || board[rowIndex][colIndex] !== 'O') {
   board[rowIndex][colIndex] = 'X'; 
  };
}

var playeroTurn = function (rowIndex, colIndex) {
  if (board[rowIndex][colIndex] !== 'X' || board[rowIndex][colIndex] !== 'O') {
    board[rowIndex][colIndex] = 'O';
  }
} 

var checkRow = function() {
  for (var i = 0; i < board.length; i++) {
    counterX = 0; 
    counterO = 0;
      for (var k = 0; k < board[i].length; k++) {
          if (board[i][k] === 'X') {
              counterX++; 
          }
          if (board[i][k] === 'O') {
              counterO++; 
          }
          if (counterX === 3) {
              return 1; 
          }
          if (counterO === 3) {
              return 2; 
          }
      }
    }
}

var checkColumn  = function() {
    for (var i = 0; i < board.length; i++) {
      if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') {
        return 1; 
        }
      if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O') {
          return 2; 
      }
    }
}

var diagnolsCheck = function(index) {

}

var changeId = function (id) {
    var changed = id.split('');
    for (var i = 0; i < changed.length; i++) {
      changed[i] = parseInt(changed[i]);
    }
  return changed; 
}

//game creation 

var gameMove = function(box) {
 var changed = changeId(box.id); 
  if (moves === 0) {
      document.getElementById(box.id).innerHTML = 'X';
      playerxTurn(changed[0], changed[1]); 
      moves++; 
  }
  else if (moves === 1) {
    document.getElementById(box.id).innerHTML = 'O';
      playeroTurn(changed[0], changed[1]); 
      moves++;
  }
  else if (moves % 2 === 0) {
    document.getElementById(box.id).innerHTML = 'X';
      playerxTurn(changed[0], changed[1]);
      moves++;
      var playerxWinRow = checkRow();
      var playerxWinC = checkColumn();
      var playerxWinD; 
      if (playerxWinRow === 1 || playerxWinC === 1) {
          alert('PLAYER X WINS!'); 
      }
  }
  else if (moves % 2 !== 0) {
    document.getElementById(box.id).innerHTML = 'O';
      playeroTurn(changed[0], changed[1]);
      moves++; 
      var playeroWinRow = checkRow();
      var playeroWinC = checkColumn();
      var playeroWinD; 
      if(playeroWinRow === 2 || playeroWinC === 2) {
          alert('PLAYER O WINS!'); 
      }
  }
}
 






