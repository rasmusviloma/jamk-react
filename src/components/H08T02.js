import React from 'react';

const H08T02 = () => {
  var kalevalaText = 'Mieleni minun tekevi, aivoni ajattelevi';

  return (
    <div className="div">
      <h2>H08T02</h2>
      <div style={{ border: '1px dashed #aaa', padding: '15px' }}>
        <button
          style={{
            backgroundColor: '#069',
            borderRadius: '5px',
            color: '#fff',
            marginBottom: '5px',
            padding: '5px 15px',
            border: 'none'
          }}
        >
          Nappi
        </button>
        <p>{kalevalaText}</p>
      </div>
    </div>
  );
};

export default H08T02;
