import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import oswald from 'typeface-oswald';

const H09T03 = () => {
  const [items, setItems] = useState([
    'Learn React By Examples',
    'Have a Nice Day'
  ]);

  const TodoBanner = () => {
    return (
      <h1
        style={{
          backgroundColor: 'cadetblue',
          textAlign: 'center',
          color: 'white',
          padding: '5px 0',
          borderRadius: '0 0 2px 2px'
        }}
      >
        Todo Example with React
      </h1>
    );
  };

  const TodoForm = () => {
    const [value, setValue] = useState('');

    const onChange = e => {
      e.preventDefault();
      setValue(e.target.value);
    };

    const addItem = e => {
      e.preventDefault();
      if (!value) return;
      const newItems = [...items, value];
      setItems(newItems);
      setValue('');
    };

    return (
      <form onSubmit={addItem}>
        <input
          onChange={onChange}
          type="text"
          name="input"
          value={value}
          style={{
            border: '1px solid #ccc',
            padding: '5px',
            width: '300px',
            fontSize: '15px'
          }}
        ></input>
        <button
          type="submit"
          style={{
            border: '1px solid #ccc',
            marginLeft: '15px',
            padding: '5px 15px',
            fontSize: '16px'
          }}
        >
          Add
        </button>
      </form>
    );
  };

  const TodoList = () => {
    const removeItem = i => {
      const newItems = [...items];
      newItems.splice(i, 1);
      setItems(newItems);
    };

    return (
      <ul
        style={{
          listStyleType: 'square',
          margin: '20px 0 20px 0',
          textAlign: 'left'
        }}
      >
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <FaTimes
              onClick={removeItem}
              style={{ marginLeft: '10px', color: 'red' }}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>H09T03</h2>
      <div
        style={{
          fontFamily: '"Oswald", sans-serif',
          width: '400px',
          backgroundColor: 'aliceblue',
          borderRadius: '3px',
          padding: '0 15px 15px',
          margin: '10px auto',
          border: '1px solid #ddd'
        }}
      >
        <TodoBanner />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default H09T03;
