import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/Global.scss'
import {BrowserRouter} from 'react-router-dom'
const Test=()=>{
  return <h1>
    hello  sss  world
  </h1>
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

