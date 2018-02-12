//use multidimensional arrays to create chart 3x for loops
//need to add javascript click handler to listen to event when user clicks; 
//player x and o need to take turns 
//create helper functions to check rows, columns, and diagnols to see if any player has won 


var board = []; 
var firstRow = [];
var secondRow = [];
var thirdRow = []; 

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

var checkRow = function(input) {
  
}

var checkColumn  = function(input) {

}

var diagnolsCheck = function(inpit) {

}

//game creation 
var playerX = 1;
var playerO = 0; 

var gameMove = function(this) {
    
}






