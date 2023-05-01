import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

console.log(
  '© Created by Viacheslav Semushin. Thank you for visiting my portfolio! It was a really long and hard process from design to implementation. As I was a Fullstack Developer Trainee I have used everything I know so far, so I hope you will enjoy this portfolio! Although now I am a DevOps Engineer, I am happy that web development skills can be applied here. Feel free to share your thoughts at any time, thank you!',
);
