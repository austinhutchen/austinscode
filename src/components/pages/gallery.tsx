import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';
import { AudioVisualizer } from './sub/AudioVisualizer';
/* ADD GUI CONTROLS FOR USERS*/
const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;

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
  const FFT = getImgPath('FFT.webp');
  const proj2 = getImgPath('proj2.gif');
  const lorentz = getImgPath('lorentz.gif');
  return (
    <>
      <NavBar />

      <div className='visualizer' >
        <h1 className="hlight"> Welcome to my fun page!</h1>
        <p className="lead"> <b> This page contains a gallery with live demos of more projects and tutorials, by me! </b> </p>
        <div className="nerdGif">
          <img src={proj2} />
        </div>
        <hr className="my-4" />



        <h2 className="hlight"> MICROPHONE SPECTRUM DECOMPOSITION</h2>
        <br />
        <img className="projImg" src={FFT} alt="Fast Fourier Transform" />

        <b>

          <p style={{ fontSize: "0.9em" }} >
            <a> <h4 className='hlight-mini'>Enable microphone input</h4> </a> to visualize this effect in real time with the spotify player interface below! This is an embedded web program that uses the fast fourier transform algorithm above to decompose the audio spectrum of a microphone input. The program then displays the audio spectrum in an HTML canvas element.
          </p>
        </b>
        <AudioVisualizer stream={stream} setStream={setStream} />
        <br />
        <h1>
          <b> <h2 className="hlight"> CURRENTLY LISTENING</h2> </b>
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe src="https://open.spotify.com/embed/album/6dtDTbVBQ9QwsNaqEnjsOT?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>       </div>

        <b>
          <h2 className="hlight"> LORENTZ ATTRACTOR </h2>
        </b>
        <p style={{ fontSize: "1em" }} >
          The Lorentz attractor is a graph represented by an iterative recursive algorithm that displays chaotic behavior. One example of such chaotic behavior is weather in nature. To generate this behavior, I wrote the code for the recursive algorithms and programmed it into a 3d modeling software, three.js. </p>
        <img className="projImg" src={lorentz} />
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
    const camera = new THREE.PerspectiveCamera(90, (window.innerWidth / window.innerHeight), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const width = ref.current?.clientWidth || 0; // Set to the width of the parent element
    const height = 400; // Set to the height of your content
    renderer.setSize(width, height);
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

    camera.position.z = 90;
    let animationId: number;

    const animate = function () {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = (window.innerWidth / window.innerHeight);
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

export default LorenzAttractor;
