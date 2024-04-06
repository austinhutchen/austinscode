import { Component } from "react";
import { Routes } from "./components/base/Routes";
import { HashRouter } from "react-router-dom";
import './App.css';
// main app

class MainApp extends Component {

  // javascript goes here
  render() {
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    );
  }
}




export default MainApp;
