
import './App.css'
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({count:0})
  }

  render() {
    return (
      <div className='box'>
        <h1>Counter App </h1>
        <p>{this.state.count}</p>
        <div className='buttons'>
          <button onClick={this.handleIncrement}> ++ </button>
          <button onClick={this.handleDecrement}> -- </button>
          <button onClick={this.handleReset}> reset </button>
        </div>
      </div>
    );
  }
}

export default Counter;


