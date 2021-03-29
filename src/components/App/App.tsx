import React, { useContext } from 'react';

import { store } from 'store';

import './App.scss';

function App() {
  const state = useContext(store);

  console.log('state', state);

  return (
    <div className="app">
      <span className="app__default">test</span>
      <span className="app__custom">test</span>
    </div>
  );
}

export default App;
