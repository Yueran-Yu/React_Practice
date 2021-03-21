import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 47
    }
  }
  // use arrow function so there will be no issue with 'this' keyword
  handleClick = () => {
    // first parameter: a function, second parameter: a callback function
    // anytime you want to update state, you should use a function instead of an object
    this.setState((prevState, prevProps) => ({meaningOfLife: prevState.meaningOfLife + 1}), () => console.log(this.state.meaningOfLife))
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>{this.state.meaningOfLife}
            </p>
            <button onClick={this.handleClick}>
              Update State
            </button>
          </header>
        </div>
    );
  }
}
export default App;
