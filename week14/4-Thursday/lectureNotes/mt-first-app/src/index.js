import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './ex1/Parent';

let myarr = ["Jordan", "Micah", "Joe", "Jake"];


ReactDOM.render(
  <React.StrictMode>
    <Parent firstName={myarr[0]}/>
  </React.StrictMode>,
  document.getElementById('root')
);


