import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="banner"> <u>Welcome to my page!</u></h1>
      <ul class="landing">
        <li>
          {" "}
          <button onclick="window.location.href = './views/about.html'">
            {" "}
            about
          </button>{" "}
        </li>
        <li>
          {" "}
          <a href="">
            {" "}
            <b>{"projects"} </b>{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="">
            {" "}
            <b> {"resume"} </b>{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="">
            {" "}
            <b>{"more"} </b>{" "}
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default App;
