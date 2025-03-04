import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

// Use forwardRef to forward the ref to the group or mesh element
const Sun = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/sun3.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials.sun}
        position={[0, 0, -0.075]}
      />
    </group>
  );
});

export default Sun;

useGLTF.preload("/sun3.glb");
