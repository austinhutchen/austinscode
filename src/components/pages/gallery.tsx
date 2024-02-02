import React, { useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, AmbientLight, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Nav } from '../common/navbar.tsx';

const ChaosAttractorVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const generateChaosAttractorGeometry = () => {
      const geometry = new BufferGeometry();
      const vertices = [];
      const numPoints = 5000;
      const dt = 0.01; // time step
      const sigma = 10.0;
      const rho = 28.0;
      const beta = 8.0 / 3.0;
      let x = 0.1, y = 0.0, z = 0.0;

      for (let i = 0; i < numPoints; i++) {
        const dx = sigma * (y - x) * dt;
        const dy = (x * (rho - z) - y) * dt;
        const dz = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
      return geometry;
    };

    const chaosAttractorGeometry = generateChaosAttractorGeometry();
    const chaosAttractorMaterial = new PointsMaterial({ color: 0xff0000, size: 0.03 });

    const chaosAttractorPoints = new Points(chaosAttractorGeometry, chaosAttractorMaterial);
    scene.add(chaosAttractorPoints);

    const ambientLight = new AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambientLight);

    const pointLight = new PointLight(0xFFFFFF, 1);
    pointLight.position.set(0, 0, 50);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the chaos attractor
      chaosAttractorPoints.rotation.z += 0.005;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(containerWidth, containerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} style={{ height: '50vh', overflow: 'hidden' }} />;
};

const ScrollAnimation: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const chaosContainer = document.getElementById('chaos-container');
      if (chaosContainer) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        chaosContainer.style.transform = `scale(${1 - scrollPercentage})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export const Visualizer: React.FC = () => {
  return (
    <>
      <Nav />
      <ScrollAnimation />
      <div id="chaos-container" className="jumbotron">
        <h1 className="hlight">Web Gallery</h1>
        <p className="lead"> <b> A gallery of more projects and tutorials, by me! </b> </p>

        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>

        <hr className="my-4"/>
        <b>
          <h2> 2D Chaos Attractor Visualizer (THREE.JS) </h2>
        </b>
        <ChaosAttractorVisualizer />
      </div>
    </>
  );
};

