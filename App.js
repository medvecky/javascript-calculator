import React from 'react';
import ReactFCCtest from 'react-fcctest';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from "./features/calculator/Calculator";

function App() {
  return (
    <div className="App">
        <ReactFCCtest/>
        <Calculator />
    </div>
  );
}

export default App;
