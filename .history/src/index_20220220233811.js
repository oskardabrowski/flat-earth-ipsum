import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';


ReactDOM.render(
  <Application>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Application>,
  document.querySelector('body')
);

const Application = styled.div`
* {
  margin: 0;
  padding: 0;
}

width: 100%;
min-height: 100vh;
background-color: red;
height: auto;
`;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
