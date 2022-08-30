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
  '© Created by Viacheslav Semushin. Thank you for visiting my portfolio! It was a really long and hard process to create this portfolio, starting from the designing part and then the implementation. As a Fullstack Developer Trainee I have used everything I know so far, so I hope you will enjoy this portfolio! Sorry if you would encounter any bugs - please feel free to report them at any time, thank you!',
);
