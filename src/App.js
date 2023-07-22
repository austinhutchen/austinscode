import { Component } from "react";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { HashRouter } from "react-router-dom";

// main app

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.state = {
      // state for app is modified here
      today: new Date(),
      date: "",
    };
  }

  setData() {
    this.setState({
      date:
        this.state.today.getMonth().toString() +
        "/" +
        this.state.today.getDate().toString() +
        "/" +
        this.state.today.getFullYear().toString(),
    });
  }

  // javascript goes here
  render() {
    this.setData();
    return (
      <HashRouter>
        <AnimatedRoutes/>
      </HashRouter>
    );
  }
}




export default MainApp;