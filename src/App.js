import { Head, Body, Foot, Route } from "./components/helpers";
import { Component } from "react";

// main app

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.state = {
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
      <div className="App">
        <Route />
        <Head />
        <Body />
        <Foot />
  
      </div>
    );
  }
}

export default MainApp;
