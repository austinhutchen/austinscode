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
    camera.position.set(0, 0, 5); // Update camera position

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Geometry and Material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    
    // Mesh
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Function to center the cube
    const centerCube = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      // Center the cube by adjusting camera position
      camera.aspect = containerWidth / containerHeight;
      camera.position.set(0, 0, 5);
      camera.updateProjectionMatrix();

      renderer.setSize(containerWidth, containerHeight);
    };

    // Initial centering
    centerCube();

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      centerCube();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} />;
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
