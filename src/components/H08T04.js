import React, { useState } from 'react';

const H08T04 = () => {
  const [value, setValue] = useState({
    input1: '',
    input2: ''
  });

  const { input1, input2 } = value;

  const onChange = e => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: parseInt(e.target.value) });
  };

  return (
    <div className="div">
      <h2>H08T04</h2>
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
                name="summary"
                value={input1 + input2}
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default H08T04;
