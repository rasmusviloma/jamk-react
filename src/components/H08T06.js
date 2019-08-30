import React, { useState } from 'react';
import passat from '../img/passat.jpg';
import escort from '../img/escort.jpg';

const H08T06 = () => {
  const [escorts, setEscorts] = useState(0);
  const [passats, setPassats] = useState(0);

  return (
    <div className="div">
      <h2>H08T06</h2>
      <div>
        <h2>Autolaskuri</h2>
        <p>Klikkaa mieleistä auton kuvaa</p>
        <div className="box">
          <p>Escorts: {escorts}</p>
          <img
            onClick={() => setEscorts(escorts + 1)}
            alt=""
            src={escort}
            style={{ width: '250px', height: 'auto' }}
          ></img>
          <p>Passats: {passats}</p>
          <img
            onClick={() => setPassats(passats + 1)}
            alt=""
            src={passat}
            style={{ width: '250px', height: 'auto' }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default H08T06;
