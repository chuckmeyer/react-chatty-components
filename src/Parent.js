import React from 'react';
import { Sibling1 } from './Sibling1';
import { Sibling2 } from './Sibling2';

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

export { Parent };