import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from "./components/landing"
import {Resume} from "./components/resume"
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
    Nav = () => {
    const nav = useNavigate();
    return (
      <div>
        <nav
          class="navbar navbar-dark bg-dark fixed-top"
          href="../views/hobbies.html"
        >
          <div>
            <button
              class="btn btn-outline-success me-2"
              type="button"
              id="navbar"
            >
              Home
            </button>
            <button
              class="btn btn-md btn-outline-secondary"
              type="button"
              id="navbar"
              onClick={() => {
                nav("./resume.js");
              }}
            >
              Resume
            </button>
            <button
              class="btn btn-md btn-outline-secondary"
              type="button"
              id="navbar"
              onClick={() => {
                nav("/");
              }}
            >
              Projects
            </button>
            <button
              class="btn btn-md btn-outline-secondary"
              type="button"
              id="navbar"
              onClick={() => {
                nav("/");            }}
            >
              Hobbies
            </button>
          </div>
          <a class="navbar-brand">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
              alt="icon"
              width="30"
              height="30"
            />
          </a>
        </nav>
      </div>
    );
  };
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