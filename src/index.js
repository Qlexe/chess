import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import data from "./cellsData";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
