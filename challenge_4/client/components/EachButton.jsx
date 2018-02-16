import React from 'react';
import PlayerButton from './PlayerButton.jsx';

const EachButton = (props) => (
  <button onClick={function() {
    props.go(props.index);
    props.clicker();
  }}   
 index={props.index}> {props.eachBtn}  </button> 
)

export default EachButton 