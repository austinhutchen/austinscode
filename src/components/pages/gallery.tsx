import React from 'react';
import { NavBar } from '../common/navbar';

export const Visualizer: React.FC = () => {
  return (
    <>
      <NavBar />
      <div id="chaos-container" className="jumbotron">
        <h1 className="hlight">Web Gallery</h1>
        <p className="lead"> <b> A gallery with live demos of more projects and tutorials, by me! </b> </p>

        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>

        <hr className="my-4"/>
        <b>
          <h2> Angular Webcam Streaming interface</h2>

        </b>
      </div>
    </>
  );
};
