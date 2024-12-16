import React from "react";
import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";

type Props = {};

export default function Scene({ }: Props) {
  return (
    <group>
      <FloatingCan flavor="blackCherry" />
      <Environment files={"hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}
