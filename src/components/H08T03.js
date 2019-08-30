import React from 'react';
import BoxComponent from './BoxComponent';

const H08T03 = () => {
  let kalevalaText = 'Mieleni minun tekevi, aivoni ajattelevi';

  return (
    <div className="div">
      <h2>H08T03</h2>
      <BoxComponent buttontext="Nappi" ptext={kalevalaText}></BoxComponent>
    </div>
  );
};

export default H08T03;
