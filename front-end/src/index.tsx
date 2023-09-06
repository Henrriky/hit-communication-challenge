import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// window.onload = function () {
//   window.addEventListener('message', function (e) {
//     if (e.origin != "http://localhost:5173") {
//       return;
//     }
//     console.log(e);
//   })
// }
window.addEventListener("message", function (e) {
  console.log(e.origin);
  console.log(e.data);
  localStorage.setItem("token", e.data);
});


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
