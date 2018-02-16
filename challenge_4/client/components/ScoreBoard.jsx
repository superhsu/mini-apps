import React from 'react';
import ScoreBoardCell from './ScoreBoardCell.jsx'; 

const ScoreBoard = (props) => (
    <tr> {props.board.map((ele) => (
     <ScoreBoardCell cell={ele}/>
    ))}  </tr> 
)

export default ScoreBoard; 

//you can use {} instead of () if you need to add any javascript to manipulate the props 
//but you need to return the () of your html styling 