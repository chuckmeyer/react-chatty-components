import './App.css';
import React from 'react';

class Sibling1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  render() {
    return (
      <div className='sibling'>
        <h1>Sibling 1</h1>
        <h2>{this.state.message}</h2>
        <input 
          type='text' 
          message={this.state.message}
          onChange={this.handleChange.bind(this)} 
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
        <p>{this.props.message}</p>
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

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <Sibling1/>
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
