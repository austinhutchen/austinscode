import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from "./components/landing"
import {Resume} from "./components/resume"
import { useNavigate } from "react-router-dom";
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
      <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="./components/resume.js" element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
      </>
    );
  }
}




export default MainApp;