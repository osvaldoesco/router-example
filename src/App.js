import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>                  
        </ul>
      </header>
      {props.children}
    </div>
  );
}

export default App;
