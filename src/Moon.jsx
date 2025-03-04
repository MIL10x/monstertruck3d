import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

// Use forwardRef to forward the ref to the group or mesh element
const Moon = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/MOONMODELglb.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.002"]}
        position={[0, 0, -0.075]}
      />
    </group>
  );
});

export default Moon;
