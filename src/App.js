import React, { Fragment } from 'react'
import Example from './example.js';
import './App.css';

const App = () => {
  return (
    
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary">1</button>
        <button type="button" className="btn btn-secondary">2</button>
        <button type="button" className="btn btn-secondary">3</button>
        <button type="button" className="btn btn-secondary">4</button>
      </div>
      <div className="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-secondary">5</button>
        <button type="button" className="btn btn-secondary">6</button>
        <button type="button" className="btn btn-secondary">7</button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-secondary">8</button>
      </div>
    </div>
    
  );
}

export default App;
