import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.sayHello = this.sayHello.bind(this);
    this.increment = this.increment.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    console.log("Hello! This is an increment message.");
  }

  sayWelcome(msg) {
    alert(`Welcome message: ${msg}`);
  }

  handleClick(e) {
    alert('I was clicked (Synthetic Event)');
    console.log(e); // SyntheticEvent
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to the eventexamplesapp")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>OnPress (Synthetic Event)</button>
      </div>
    );
  }
}

export default Counter;
