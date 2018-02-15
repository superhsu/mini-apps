import React from 'react';

var round = 0; 

export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      board: [
        ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a', 'a', 'a', 'a']
      ]
    };
  }

  playerClick(i, j) {
    console.log(i, j);
    console.log(this); 
  }
  
  setPiece(i, j) {
    if (this.state.board[this.state.board.length-1][j] === 'a') {
      var newBoard = this.state.board; 
      if (round === 0 || round % 2 === 0) {
        newBoard[newBoard.length-1][j] === 'r';
        round++; 
      } else {
          newBoard[newBoard.length-1][j] === 'y';
          round++; 
      }
      this.setState ({
        board: newBoard
      })
    } else {
        var newBoard = this.state.board; 
        for (var k = 0; k < newBoard.length; k++) {
          if (newBoard[i][j] !== 'a') {
            if (round === 0 || round % 2 === 0) {
              newBoard[i-1][j] = 'r'
            } else {
              newBoard[i-1][j] = 'y'
            }       
          }
        }
        this.setState ({
          board: newBoard 
        })  
      } 
    }
  
    

  checkRow (i) {
    
  }

  render() {
  var that = this; 
    return (
     <div style={{textAlign: 'center'}}>
        <h1 className='title'>CONNECT 4!</h1>
        <div className='design'> 
        {this.state.board.map(function (ele, i){
          return ele.map(function(val, j){
            return (<Square playerClick={that.playerClick} setPiece={that.setPiece.bind(that)} randomSquare={val} rowIndex={i} colIndex={j}/>)
          })
        })} 
        </div> 
    </div>
      )
  }
}
//any return needs () parens
var Square = (props) => {
  return (<div className='squareDesign' onClick={function () {props.playerClick(props.rowIndex, props.colIndex, props.setPiece(props.rowIndex, props.colIndex))}}>{props.randomSquare} {props.rowIndex} {props.colIndex}</div>) 
}



//create one component for the board 
//create 42 div or table 