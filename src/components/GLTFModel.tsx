import React, { useRef, FC, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";


interface GLTFModelProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  hovered: boolean
}

const GLTFModel: FC<GLTFModelProps> = (props) => {
  const {
    modelPath,
    scale = 3,
    position = [0, 0, 0],
    hovered,
  } = props
  const ref = useRef<Mesh>(null!);
  const gltf = useGLTF(modelPath);
  const scene = useMemo(() => gltf.scene.clone(), [gltf])

  useFrame((state, delta) => {
    if (ref.current && hovered && ref.current.scale.x < scale * 1.2) {
      const multiplier = 1 + (200 * delta * (scale * 1.2 - ref.current.scale.x)) / 100
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = ref.current.scale.x * multiplier
    }
    if (ref.current && !hovered && ref.current.scale.x > scale) {
      const multiplier = 1 / (1 + (100 * delta * (ref.current.scale.x - scale)) / 100)
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = ref.current.scale.x * multiplier
    }
  })
  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
    />
  )
};

export default GLTFModel;