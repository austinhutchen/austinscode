import { Component } from "react";
import { AnimatedRoutes } from "./components/base/AnimatedRoutes";
import { HashRouter } from "react-router-dom";
import React  from 'react';
// main app

class MainApp extends Component {

  // javascript goes here
  render() {
    return (
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    );
  }
}




export default MainApp;