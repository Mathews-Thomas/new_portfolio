import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Logo = () => {
  const logoRef = useRef();

  // Load textures for the front and back logos
  const frontTexture = useTexture('/logo.png'); // Front logo texture
  const backTexture = useTexture('/mathews copy.png'); // Back logo texture

  frontTexture.onError = () => {
    console.error("Could not load front texture");
  };

  backTexture.onError = () => {
    console.error("Could not load back texture");
  };

  // Rotate the logo continuously
  useFrame(({ clock }) => {
    logoRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={logoRef}>
      {/* Front side logo */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={frontTexture} transparent side={THREE.FrontSide} />
      </mesh>
      {/* Back side logo */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={backTexture} transparent side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

const Logo3D = () => {
  return (
    <Canvas className="w-full h-full" style={{ objectFit: 'cover', width: '250px', height: '250px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <React.Suspense fallback={null}>
        <Logo className="w-full h-full rounded-full shadow-2xl" />
      </React.Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Logo3D;
