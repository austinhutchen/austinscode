import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Nav} from "../common/navbar.tsx";
 









const ThreeDShapeVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    containerRef.current.appendChild(renderer.domElement);

    // Geometry and Material
    const cubeGeometry = new THREE.BoxGeometry();
    const torusKnotGeometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);

    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.5 });

    // Meshes
    const cube = new THREE.Mesh(cubeGeometry, material);
    const torusKnot = new THREE.Mesh(torusKnotGeometry, material);

    // Position shapes
    cube.position.set(-2, 0, 0);
    torusKnot.position.set(2, 0, 0);

    // Add shapes to the scene
    scene.add(cube);
    scene.add(torusKnot);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xfffff);
    scene.add(ambientLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate shapes
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      torusKnot.rotation.x -= 0.01;
      torusKnot.rotation.y -= 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const containerWidth = 800;
      const containerHeight = 800;

      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(containerWidth, containerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />;
};



export const Visualizer:React.FC=()=>{
return(
<div >
<Nav/>
<h1 className="hlight"> Web Gallery </h1>

<hr/>
<b>
<h2>

3D VISUALIZER (THREE.JS)
</h2>
</b>
<ThreeDShapeVisualizer/>
</div>
)



}
