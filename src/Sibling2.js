import React from 'react';

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

export { Sibling2 };