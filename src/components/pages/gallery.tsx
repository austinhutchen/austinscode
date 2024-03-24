import React, { useRef, useEffect }  from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';


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

        <hr className="my-4"/>
        <b>
          <h2> 4-DIMENSIONAL TESSERACT</h2>

        </b>
    <hr/>
    <Tesseract/>
      </div>
    </>
  );
};


const Tesseract: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={ref} />;
};

export default Tesseract;
