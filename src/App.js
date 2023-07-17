import { Component } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import { Landing } from "./components/landing"
import { Resume } from "./components/resume"
import { Projects } from "./components/projects"
import { Reader } from "./components/accredations"
import { Hobbies } from "./components/hobbies"
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
      <>
        <BrowserRouter basename="/${process.env.PUBLIC_URL}">
          <Routes>
            <Route exact path="" element={<Landing />} />
            <Route exact path="src/components/landing.js" element={<Landing />} />
            <Route exact path="src/components/resume.js" element={<Resume />} />
            <Route exact path="src/components/projects.js" element={<Projects />} />
            <Route exact path="src/components/hobbies.js" element={<Hobbies />} />
            <Route exact path="src/components/accredations.js" element={<Reader />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}




export default MainApp;