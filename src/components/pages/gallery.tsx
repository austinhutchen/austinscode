import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Nav } from "../common/navbar.tsx";

const CraziestThreeDShapeVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    containerRef.current.appendChild(renderer.domElement);

    const dodecahedronGeometry = new THREE.DodecahedronGeometry();
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);

    const dodecahedronMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff, roughness: 0.5, metalness: 0.5 });
    const icosahedronMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff, roughness: 0.5, metalness: 0.5 });

    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);

    scene.add(dodecahedron);
    scene.add(icosahedron);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      dodecahedron.rotation.x += 0.03;
      dodecahedron.rotation.y += 0.03;
      icosahedron.rotation.x -= 0.03;
      icosahedron.rotation.y -= 0.03;

      // Add a funky color pulsation effect
      dodecahedron.material.color.setHSL(Math.sin(Date.now() * 0.001), 1, 0.5);
      icosahedron.material.color.setHSL(Math.cos(Date.now() * 0.001), 1, 0.5);

      // Add a mind-bending scaling effect
      dodecahedron.scale.x = 1 + Math.sin(Date.now() * 0.002) * 0.5;
      dodecahedron.scale.y = 1 + Math.cos(Date.now() * 0.002) * 0.5;
      icosahedron.scale.x = 1 + Math.sin(Date.now() * 0.002) * 0.5;
      icosahedron.scale.y = 1 + Math.cos(Date.now() * 0.002) * 0.5;

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

  return <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50svh' }} />;
};

export const Visualizer: React.FC = () => {
  return (
    <div>
      <Nav />
      <h1 className="hlight"> Web Gallery </h1>
      <hr />
      <b>
        <h2> Polygon Blob Isomorphism Machine (THREE.JS) </h2>
      </b>
      <CraziestThreeDShapeVisualizer />
    </div>
  );
};

