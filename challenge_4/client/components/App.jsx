import React from 'react';
import Count from './Count.jsx';
import PlayerButton from './PlayerButton.jsx';
import EachButton from './EachButton.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import ScoreBoardCell from './ScoreBoardCell.jsx';
import Round from './Round.jsx'
import TotalScore from './TotalScore.jsx'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlingPins: 10,
      buttonArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      roundScore: [0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
      round: 1,
      pinsLeft: 0,
      totalScores: 0 
    }
  }

playerClick () {
  
}

addScores () {
  var newTotalScore = this.state.roundScore; 
  var addedTotalScores = newTotalScore.reduce(function(a,b) {
    return a+b; 
  })
  this.setState({totalScores: addedTotalScores});
}

playerGo (pinIndex) {
  //bowler throws ball knocking down pins
  var newPin = this.state.bowlingPins; 
  var newRound = this.state.round; 
  var newScoreBoard = this.state.roundScore;
  
  newPin = newPin - pinIndex

   if (newPin < 0) {
    this.setState({
      bowlingPins: 0
    })
  } else {
    this.setState({bowlingPins: newPin});
  }
  console.log(this.state.bowlingPins); 

  if (pinIndex === 10) {
    newScoreBoard[newRound-1] = 10;  
    newRound++; 
    this.setState({round: newRound});
    this.setState({roundScore: newScoreBoard});
  } else {

  }
  this.addScores(); 
}

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>
          Bowling!
           </h1>
        <div> 
          <TotalScore addedScores={this.state.totalScores} />
          </div> 
        <div> 
          <Count pinCount={this.state.bowlingPins}/> 
          </div>
        <div> 
          <PlayerButton go={this.playerGo.bind(this)} clicker={this.playerClick} button={this.state.buttonArray}/> 
        </div> 
          <h2>
          ROUND SCORE
          </h2>
          <table align='center'>
            <tbody>
            <ScoreBoard board={this.state.roundScore}/> 
            </tbody> 
            </table> 
            <div> 
              <Round round={this.state.round}/> 
              </div>
      </div>
    );
  }
}





