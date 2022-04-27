import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm2CnSHhnzCaxF3a36PgGdPIPypNB_3bA",
  authDomain: "mitienda-react.firebaseapp.com",
  projectId: "mitienda-react",
  storageBucket: "mitienda-react.appspot.com",
  messagingSenderId: "790329543805",
  appId: "1:790329543805:web:b22ed105c143d1be5f7514"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
