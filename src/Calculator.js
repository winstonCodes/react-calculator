import React, { Component } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';
import './Calculator.scss';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: '0',
    };
    this.onSave = this.onSave.bind(this);
    this.onClear = this.onClear.bind(this);
  }


  onSave(output){
    this.setState({result: output})
  }

  onClear(){
    this.setState({result: '0'})
  }

  render() {
    return (
      <div className="calculator">

        <CalculatorDisplay result={this.state.result} />
        <CalculatorInput onSave={this.onSave} onClear={this.onClear} />

      </div>
    );
  }
}

export default Calculator;
