"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, View } from "@react-three/drei";
import FloatingCan from "./FloatingCan";

type Props = {};

export default function ViewCanvas({ }: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 3000,
      }}
      shadows
      camera={{ fov: 30 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}

    >
      <View.Port />

    </Canvas>
  );
}
