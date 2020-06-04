import React from 'react';
import './App.css';
import 'bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/appContext";
import Calculator from './view/calculator';

function App() {
  return (
    <Calculator initialValue={"123"} />
  );
}

export default injectContext(App);
