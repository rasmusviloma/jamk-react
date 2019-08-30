import React from 'react';

const H08T01 = () => {
  let names = ['Arska', 'Basso', 'Mixu'];

  return (
    <div className="div">
      <h2>H08T01</h2>
      {names.map((name, i) => (
        <p key={i}>Terve {name}!</p>
      ))}
    </div>
  );
};

export default H08T01;
