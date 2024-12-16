"use client";

import { Float } from "@react-three/drei";
import React, { forwardRef } from "react";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type Props = {
  flavor?: SodaCanProps["flavor"];
  floatingSpeed?: number;
  floadingIntensity?: number;
  floatingRange?: [number, number];
  rotationIntensity?: number;
  children?: React.ReactNode;
};

const FloatingCan = forwardRef<Group, Props>(
  (
    {
      flavor = "blackCherry",
      floatingSpeed = 1.5,
      floadingIntensity = 1,
      floatingRange = [-0.1, 0.1],
      rotationIntensity = 1,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatingSpeed}
          floatIntensity={floadingIntensity}
          floatingRange={floatingRange}
          rotationIntensity={rotationIntensity}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
