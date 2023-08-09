import { Component } from "react";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { HashRouter } from "react-router-dom";

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