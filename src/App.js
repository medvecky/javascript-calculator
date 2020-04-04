import React from 'react';
import ReactFCCtest from 'react-fcctest';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
