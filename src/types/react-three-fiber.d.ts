import { JSX } from "react";
import { MeshProps, BoxGeometryProps, MeshStandardMaterialProps, GroupProps } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      mesh: MeshProps;
      boxGeometry: BoxGeometryProps;
      meshStandardMaterial: MeshStandardMaterialProps;
      group: GroupProps;
    }
  }
}