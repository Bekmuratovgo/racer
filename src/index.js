import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('version 1.6');
root.render(
  <Provider store={store}>
    <App />,
  </Provider>
);