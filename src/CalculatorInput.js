import React, { Component } from 'react';
import './CalculatorInput.css';

class CalculatorInput extends Component {
  constructor(props){ // props: onSave(), onClear
    super(props)
    this.state = {
      inputMath: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleButtonInput = this.handleButtonInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {onSave} = this.props;
    let result = 0;
    try {
      result = eval(this.state.inputMath);

    } catch (e) {
      result = 0;
    }
    result = Math.round(result*1000000)/1000000;
    onSave(result);
    this.setState({inputMath:''})
  }

  handleInput(e){
    console.log(e.target.value);
    let rawInput = e.target.value;
    // console.log(rawInput);
    let input = rawInput.match(/^-?\d+\.?\d+[-+*\/]-?\d+\.?\d+$/g);
    this.setState({inputMath: input})

  }

  handleButtonInput(e){
    let input = e.target.innerHTML;
    let newInput = this.state.inputMath + input
    this.setState({inputMath: newInput})
  }

  handleClear(e){
    const {onClear} = this.props;
    if(!this.state.inputMath){
      onClear()
    } else {
      this.setState({inputMath: ""})
    }
  }

  render() {
    return (
      <div className="calculator-form-container">
        <form onSubmit={this.handleSubmit} style={{display:"none"}}>
          <input
            name="inputMath"
            value={this.state.inputMath}
            onChange={this.handleInput} />
          <button>Calculate</button>
        </form>
        <div className="calc-input-view">
          <p>{this.state.inputMath}</p>
        </div>
        <div className="calculator-button-container">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>+</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>-</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>*</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>/</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>0</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>1</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>2</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>3</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>4</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>5</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>6</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>7</button>
                </td>
              </tr>
              <tr>
                <td>
                <button className="calc btn btn-dark" onClick={this.handleButtonInput}>8</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>9</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleButtonInput}>.</button>
                </td>
                <td>
                  <button className="calc btn btn-dark" onClick={this.handleSubmit}>=</button>
                </td>
              </tr>
              <tr>
              <td>
              <button className="calc btn btn-dark" onClick={this.handleClear}>c</button>
              </td>
              <td/><td/><td/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CalculatorInput;
