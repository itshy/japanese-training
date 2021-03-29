import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

import { StateProvider } from 'store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
