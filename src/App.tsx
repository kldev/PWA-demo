import React from 'react';
import './App.css';
import { ChangeMe } from './Fakechange';

import { persons } from './model/Data';
const appVersion = `${process.env.REACT_APP_VERSION}`;

const App: React.FC = () => {
  const personsList = persons.reverse().map<JSX.Element>(x => {
    return (
      <div>
        <h3>{x.fullName}</h3>
        <img src={x.image}></img>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>APP: {appVersion}</p>
        <p>Not important changes {ChangeMe}</p>
        <div>{personsList}</div>
      </header>
    </div>
  );
};

export default App;
