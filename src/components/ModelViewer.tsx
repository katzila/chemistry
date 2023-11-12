import React, { Suspense, FC, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  const xl = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Canvas
      style={{
        width: 'auto',
        height: '600px',
        margin: '-8px'
      }}
      onMouseEnter={() => hover(true)}
      onMouseLeave={() => hover(false)}
      shadows
    >
      <color attach="background" args={[theme.palette.background.paper]} />
      <ambientLight intensity={0.8} />
      <spotLight
        color={'#ffffff'}
        intensity={200}
        angle={Math.PI / 4}
        position={[10, 10, 10]}
        castShadow
        penumbra={1}
        shadow-bias={-0.0001}
      />
      <spotLight
        color={'#ffffff'}
        intensity={100}
        angle={Math.PI / 2}
        position={[10, 0, -10]}
        castShadow
        penumbra={1}
        shadow-bias={-0.0001}
      />
      <spotLight
        color={'#ffffff'}
        intensity={40}
        angle={Math.PI / 2}
        position={[-10, 0, 10]}
        castShadow
        penumbra={1}
        shadow-bias={-0.0001}
      />
      <PerspectiveCamera makeDefault position={[20, 0, 0]} fov={50} />
      <Suspense fallback={null}>
        <GLTFModel
          modelPath={process.env.PUBLIC_URL + modelPath}
          scale={xl ? scale : lg ? scale * 7 / 8 : md ? scale : sm ? scale * 7 / 8 : scale * 5 / 8}
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