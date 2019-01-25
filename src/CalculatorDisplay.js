import React, { Component } from 'react';
import './CalculatorDisplay.css';

// props: result
const CalculatorDisplay = props => (
  <h1>{props.result}</h1>
)

export default CalculatorDisplay;
