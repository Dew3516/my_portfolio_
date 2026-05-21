/*"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// Component to load external GLB model
interface ModelProps {
  url: string; // URL of external .glb or .gltf file
  scale?: number;
}

function Model({ url, scale = 1.5 }: ModelProps) {
  const gltf = useGLTF(url, true);
  const meshRef = useRef<any>(null);

  // Auto rotate
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return <primitive ref={meshRef} object={gltf.scene} scale={scale} />;
}

export default function ThreeModelExternal() {
  return (
    <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Model url="/models/certificate_trophy.glb" scale={1.5} />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
*/