import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';
import  {AudioVisualizer, TimeDomainVisualizer } from './sub/AudioVisualizer';
/* ADD GUI CONTROLS FOR USERS*/
export const Visualizer: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };

    return () => {
      window.onbeforeunload = null;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);
  return (
    <>
      <NavBar />

      <div className='visualizer' >
        <h1 className="hlight"> Welcome to my fun page!</h1>
        <p className="lead"> <b> This page contains a gallery with live demos of more projects and tutorials, by me! </b> </p>
        <div>
          <iframe src="https://giphy.com/embed/l4FGyCRpqs7WNEAla" ></iframe></div>
        <hr className="my-4" />



        <h2 className="hlight"> MICROPHONE SPECTRUM DECOMPOSITION</h2>
        <b>
          <p style={{ fontSize: "0.9em", fontFamily: "-moz-initial" }} >
            <a> <h4 className='hlight-mini'>Enable microphone input</h4> </a> to visualize this effect in real time with the spotify player interface below! This is an embedded web program that uses the fast fourier transform to decompose the audio spectrum of a microphone input. The program then displays the audio spectrum in an HTML canvas element.
          </p>
        </b>
        <AudioVisualizer stream={stream} setStream={setStream} />
        <TimeDomainVisualizer stream={stream} setStream={setStream} />
        <br/>


        <b>
          <h2 className="hlight"> RIEMANN ZETA FUNCTION</h2>

        </b>
        <p style={{ fontSize: "0.9em", fontFamily: "-moz-initial" }} >
          The Zeta function.
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Riemann_zeta_function.gif?20180922070425"/>
        <br/>
        <Zeta3DVisualizer  />
<br/>
        <b>
          <h2 className="hlight"> LORENTZ ATTRACTOR </h2>

        </b>
        <p style={{ fontSize: "0.9em", fontFamily: "-moz-initial" }} >
          The Lorentz attractor is a graph represented by an iterative recursive algorithm that displays chaotic behavior. One example of such chaotic behavior is weather in nature.</p>
        <LorenzAttractor />
        <br />

      </div>

    </>
  );
};

const LorenzAttractor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = [];

    // Lorenz Attractor parameters
    const a = 10, b = 28, c = 8 / 3;
    let x = 0.1, y = 0, z = 0;

    for (let i = 0; i < 10000; i++) {
      const dx = a * (y - x);
      const dy = x * (b - z) - y;
      const dz = x * y - c * z;

      x += dx * 0.01;
      y += dy * 0.01;
      z += dz * 0.01;

      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);

    scene.add(line);

    camera.position.z = 50;
    let animationId: number;

    const animate = function () {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      ref.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="lorenz-attractor" ref={ref} />;
};


export const Zeta3DVisualizer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  function zeta(s:any, terms = 100) {
    let sum = 0;
    for (let n = 1; n <= terms; n++) {
      sum += Math.pow(n, -s);
    }
    return sum;
  }
  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(100 * 100 * 3); // 100 vertices along the x-axis, 100 along the z-axis, 3 coordinates per vertex

    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 100; z++) {
        const index = (x * 100 + z) * 3;
        positions[index] = x - 50;
        positions[index + 1] = Math.abs(zeta(x / 10)) * 10; // Use the real part of the Zeta function
        positions[index + 2] = z - 50;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = points.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.abs(zeta((positions[i] + performance.now() / 1000) / 10)) * 10;
      }

      points.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className="zeta-3d-visualizer" ref={ref} />;
};

export default LorenzAttractor;
