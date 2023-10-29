import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { Provider } from "react-redux"
import App from './App';
import signupReducer from './reduxStore/reducers/signUpReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(signupReducer, applyMiddleware(thunk)); // Create the Redux store

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();