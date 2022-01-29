import './App.css';
import React from 'react';

class Sibling1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
    });
    this.props.handleCallback(event.target.value);
  }

  render() {
    return (
      <div className='sibling'>
        <h1>Sibling 1</h1>
        <h2>{ this.state.message ? this.state.message: 'Your ad here' }</h2>
        <input 
          type='text' 
          message={this.state.message}
          onChange={this.handleChange} 
          placeholder="Type something"
        />
      </div>
    );
  }
}

class Sibling2 extends React.Component {
  render() {
    return (
      <div className='sibling'>
        <h1>Sibling 2</h1>
        <h2>{ this.props.message ? this.props.message: 'Your ad here' }</h2>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Your ad here',
    };
  }

  handleCallback= (input) => {
    this.setState({
      message: input,
    });
  }

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <Sibling1 handleCallback={this.handleCallback}/>
        <Sibling2 message={this.state.message}/>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
