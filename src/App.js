import React from 'react';
import './App.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="calculator">
      <div className="screen">
        <h1>0</h1>
      </div>
      <div className="top-buttons pt-4">
        <button className="keyboard" value="+"><h1>+</h1></button>
        <button className="keyboard" value="-"><h1>-</h1></button>
        <button className="keyboard" value="x"><h1>x</h1></button>
        <button className="keyboard" value="/"><h1>/</h1></button>
      </div>
      <div className="left-buttons">
        <div className="">
          <button className="keyboard" value="7"><h1>7</h1></button>
          <button className="keyboard" value="8"><h1>8</h1></button>
          <button className="keyboard" value="9"><h1>9</h1></button>
        </div>
        <div className="pt-2">
          <button className="keyboard" value="4"><h1>4</h1></button>
          <button className="keyboard" value="5"><h1>5</h1></button>
          <button className="keyboard" value="6"><h1>6</h1></button>
        </div>
        <div className="pt-2">
          <button className="keyboard" value="1"><h1>1</h1></button>
          <button className="keyboard" value="2"><h1>2</h1></button>
          <button className="keyboard" value="3"><h1>3</h1></button>
        </div>
        <div className="pt-2">
          <button className="keyboard" value="0"><h1>0</h1></button>
          <button className="keyboard" value="."><h1>.</h1></button>
          <button className="keyboard btn-danger" value="ac"><h1>AC</h1></button>
        </div>
      </div>
      <div className="right-buttons">
      <button className="keyboard btn-primary" value="="><h1>=</h1></button>

      </div>
    </div>
  );
}

export default App;


