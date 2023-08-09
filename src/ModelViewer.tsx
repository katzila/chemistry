import React, { Suspense, FC, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import GLTFModel from "./GLTFModel";

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

const ModelViewer: FC<ModelViewerProps> = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const [hovered, hover] = useState(false);
  return (
    <Canvas
      style={{
        width: '100%',
        height: '600px',
      }}
      onMouseEnter={() => hover(true)}
      onMouseLeave={() => hover(false)}
    >
      <ambientLight intensity={1.5} />
      <PerspectiveCamera makeDefault position={[20, 0, 0]} />
      <Suspense fallback={null}>
        <GLTFModel
          modelPath={process.env.PUBLIC_URL + modelPath}
          scale={scale}
          position={position}
          hovered={hovered}
        />
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3 / 4}
          minAzimuthAngle={Math.PI * 1 / 8}
          maxAzimuthAngle={Math.PI * 7 / 8}
          minDistance={10}
          maxDistance={25}
          autoRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;