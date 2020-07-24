import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './util.css';

const App = () => {
  return (
    <div className="limiter wrap-login100">
    </div>
  );
  };

ReactDOM.render(
  <div className="container-login100-form-btn m-t-10">
    <button className="login100-form-btn">
      Log In
    </button>
  </div>,
  document.getElementById('app'));

export default App;