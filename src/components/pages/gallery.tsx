import React, { useRef, useEffect } from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';


export const Visualizer: React.FC = () => {
  return (
    <>
    <NavBar />

    <div className='visualizer'>
        <h1 className="hlight"> Welcome to my fun page!</h1>
        <p className="lead"> <b> This page contains a gallery with live demos of more projects and tutorials, by me! </b> 
        <br/>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>

        </p>

      




        <hr className="my-4" />
        <b>
          <h2 className="hlight"> 4-DIMENSIONAL TESSERACT</h2>

        </b>
        <p style={{fontSize:"1.2em", fontFamily:"-moz-initial"}} >
          A tesseract is a four-dimensional analog to the cube. It is to a cube as a cube is to a square. Just as the surface of a cube consists of six square faces, the hypersurface of a tesseract consists of eight cubical cells. The tesseract is one of the six convex regular 4-polytopes. Here, I programmed a visualizer using three.js, a three-dimensional software that rotates a cube to project all of its faces.
        </p>
        <br />
        <Tesseract />
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
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));

    scene.add(line);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      line.rotation.x += 0.01;
      line.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className="tesseract" ref={ref} />;
};

export default Tesseract;