import React from 'react';

const BoxComponent = props => {
  return (
    <div style={{ border: '1px dashed #aaa', padding: '15px' }}>
      <button>{props.buttontext}</button>
      <p>{props.ptext}</p>
    </div>
  );
};

export default BoxComponent;
