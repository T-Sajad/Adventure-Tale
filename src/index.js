import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Story';
import reportWebVitals from './reportWebVitals';
import story from './data/myStory'
import parse from './parser'
console.log(story)
const prop = parse(story)
console.log(prop)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App story = {prop} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
