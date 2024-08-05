import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Logo = () => {
  const logoRef = useRef();

  // Correct path to the logo image in the public directory
  const texture = useTexture('/logo.png'); // Ensure this path is correct

  texture.onError = () => {
    console.error("Could not load texture");
  };

  // Rotate the logo continuously
  useFrame(({ clock }) => {
    logoRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={logoRef} position={[0, 0, 0]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};

const Logo3D = () => {
  return (
    <Canvas className="w-full h-full " style={{ objectFit: 'cover', width: '250px', height: '250px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <React.Suspense fallback={null} >
        <Logo className="w-full h-full rounded-full shadow-2xl"/>
      </React.Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Logo3D;
