import React, { useState } from 'react';

const H08T05 = () => {
  const [value, setValue] = useState({
    input1: '',
    input2: ''
  });

  const [result, setResult] = useState('');

  const { input1, input2 } = value;

  const onChange = e => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: parseInt(e.target.value) });
  };

  const summary = () => {
    setResult(input1 + input2);
  };
  const difference = () => {
    setResult(input1 - input2);
  };
  const times = () => {
    setResult(input1 * input2);
  };
  const division = () => {
    setResult(input1 / input2);
  };

  return (
    <div className="div">
      <h2>H08T05</h2>
      <table className="box" style={{ width: '200px', margin: 'auto' }}>
        <tbody>
          <tr>
            <td>Luku1:</td>
            <td>
              <input
                onChange={onChange}
                name="input1"
                value={input1}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Luku2:</td>
            <td>
              <input
                onChange={onChange}
                name="input2"
                value={input2}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Tulos:</td>
            <td>
              <input
                onChange={onChange}
                name="input3"
                value={result}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Laske</td>
            <td>
              <button onClick={summary}>+</button>
              <button onClick={difference}>-</button>
              <button onClick={times}>*</button>
              <button onClick={division}>/</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default H08T05;
