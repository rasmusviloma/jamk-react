import React, { useState, useEffect } from 'react';

const H09T01 = () => {
  let highscoreData = [
    { id: 1, name: 'Jason', score: 4000 },
    { id: 2, name: 'Make', score: 3000 },
    { id: 3, name: 'Bill', score: 2000 },
    { id: 4, name: 'Liza', score: 1000 }
  ];

  const [highscores, setHighScores] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getHighscores = () => {
    setTimeout(() => {
      setHighScores(highscoreData);
      setLoaded(true);
    }, 3000);
  };

  useEffect(() => {
    getHighscores();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="div">
      <h2>H09T01</h2>
      <h5>Highscores</h5>
      <ul style={{ width: '100px', margin: 'auto' }}>
        {loaded ? (
          highscores.map(highscore => (
            <li key={highscore.id}>
              {highscore.name} : {highscore.score}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default H09T01;
