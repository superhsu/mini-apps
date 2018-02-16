import React from 'react'; 
import EachButton from './EachButton.jsx' 

const PlayerButton = (props) => (
  <div> 
    {props.button.map((ele, i) => (
    <EachButton go={props.go} clicker={props.clicker} eachBtn={ele} index={i} /> 
   ))}
    </div>)

export default PlayerButton; 