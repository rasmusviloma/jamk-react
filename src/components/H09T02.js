import React, { useEffect, useState } from 'react';
import axios from 'axios';

const H09T02 = () => {
  const [highscores, setHighScores] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getHighscores = async () => {
    const res = await axios.get('highscore.json');
    console.log(res.data.highscoreData);
    setHighScores(res.data.highscoreData);
    setLoaded(true);
  };

  useEffect(() => {
    getHighscores();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="div">
      <h2>H09T02</h2>
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

export default H09T02;
