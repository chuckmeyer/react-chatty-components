import React from 'react';

function Sibling1(props) {
  return (
    <div className='sibling'>
      <h1>Sibling 1</h1>
      <input 
        type='text' 
        onChange={(event) => props.handleCallback(event.target.value)} 
        placeholder="Type something"
      />
    </div>
  );
}

export { Sibling1 };