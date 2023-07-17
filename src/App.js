import { Component } from "react";
import { Routes, Route } from "react-router-dom";
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
    const basename = document.querySelector('base')?.getAttribute('href') ?? '/'  ;
    this.setData();
    return (
      <>
        <HashRouter basename={basename}>
          <Routes>
            <Route exact path="" element={<Landing />} />
            <Route exact path="src/components/landing.js" element={<Landing />} />
            <Route exact path="src/components/resume.js" element={<Resume />} />
            <Route exact path="src/components/projects.js" element={<Projects />} />
            <Route exact path="src/components/hobbies.js" element={<Hobbies />} />
            <Route exact path="src/components/accredations.js" element={<Reader />} />
          </Routes>
        </HashRouter>
      </>
    );
  }
}




export default MainApp;