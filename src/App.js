import React from 'react';
import './App.css';

// Harjoitus 8 tehtävät
import H08T01 from './components/H08T01';
import H08T03 from './components/H08T03';
import H08T04 from './components/H08T04';
import H08T05 from './components/H08T05';
import H08T06 from './components/H08T06';

//Harjoitus 9 tehtävät
import H09T01 from './components/H09T01';
import H09T02 from './components/H09T02';
import H09T03 from './components/H09T03';

function App() {
  return (
    <div className="App">
      <h1>Harjoitukset 8</h1>
      <H08T01></H08T01>
      <H08T03></H08T03>
      <H08T04></H08T04>
      <H08T05></H08T05>
      <H08T06></H08T06>
      <h1>Harjoitukset 9</h1>
      <H09T01></H09T01>
      <H09T02></H09T02>
      <H09T03></H09T03>
    </div>
  );
}

export default App;
