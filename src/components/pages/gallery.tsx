import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';
import { sin, complex, Complex } from 'mathjs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AudioVisualizer, TimeDomainVisualizer } from './sub/AudioVisualizer';
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
        <img src ={proj2}/>
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
        <TimeDomainVisualizer stream={stream} setStream={setStream} />
        <br />
        <h1>
          <b> <h2 className="hlight"> CURRENTLY LISTENING</h2> </b>
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe src="https://open.spotify.com/embed/album/6dtDTbVBQ9QwsNaqEnjsOT?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>       </div>
        <b>
          <h2 className="hlight"> COMPLEX PLANE SINE </h2>

        </b>
        <p style={{ fontSize: "1em" }} >
          The 3-dimensional sine function, as defined as a function of complex numbers. All of the mathematics is done in code, by me. Involved is linear algebra in three dimensions, and texture / mesh mapping I coded using three.js, which is a javascript library. <br /> <h3 className="hlight-mini">  Tap and scroll on the box to move around the function in 3-d!</h3>
        </p>
        <img className="projImg" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/ComplexSinInATimeAxe.gif" />
        <br />
        <div >
          <Sine3DVisualizer />
        </div>
        <br />
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

export const Sine3DVisualizer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement);
    const width = ((ref.current?.clientWidth || 0) / 2) || 0; // Set to the width of the parent element
    const height = 170; // Set to the height of your content
    renderer.setSize(width, height);
    ref.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(150 * 150 * 3); // 100 vertices along the x-axis, 100 along the z-axis, 3 coordinates per vertex

    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 100; z++) {
        const index = (x * 100 + z) * 3;
        positions[index] = x - 50;
        const sinValue = sin(complex(x / 10, z / 10)) as Complex;
        positions[index + 1] = Math.sqrt(sinValue.re * sinValue.re + sinValue.im * sinValue.im) * 10; // Use the magnitude of the sine function
        positions[index + 2] = z - 50;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffff1A, size: 0.1 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // you need to update the controls in your animation loop

      const positions = points.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const sinValue = sin(complex((positions[i] + performance.now() / 1000) / 5, positions[i + 2] / 5)) as Complex;
        positions[i + 1] = Math.sqrt(sinValue.re * sinValue.re + sinValue.im * sinValue.im) * 13;
      }

      points.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className="sine-3d-visualizer" ref={ref} />;
};

export default LorenzAttractor;
