import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/MONSTERTRUCKwithoulightstreetlamb.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[-1.253, 0.236, 1.246]} scale={[0.602, 0.602, 0.506]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0004.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0004_1.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spring002_Light_black_0002.geometry}
        material={materials["Material.012"]}
        position={[-1.205, 1.052, -0.052]}
        rotation={[0.448, 0, -Math.PI / 2]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spring002_Light_black_0003.geometry}
        material={materials["Material.012"]}
        position={[1.198, 1.052, -0.048]}
        rotation={[0.448, 0, -Math.PI / 2]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spring002_Light_black_0001.geometry}
        material={materials["Material.012"]}
        position={[-1.2, 1.052, 0.376]}
        rotation={[-0.37, 0, -Math.PI / 2]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spring002_Light_black_0004.geometry}
        material={materials["Material.012"]}
        position={[1.205, 1.052, 0.36]}
        rotation={[-0.46, 0, -Math.PI / 2]}
        scale={0.034}
      />
      <group position={[1.228, 0.236, 1.246]} scale={[0.602, 0.602, 0.506]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0006.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0006_1.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group
        position={[1.228, 0.236, -0.893]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.602, 0.602, 0.506]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0009.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0009_1.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group
        position={[-1.253, 0.236, -0.893]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.602, 0.602, 0.506]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0010.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_wheel_Black_0010_1.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group position={[0.136, 0.718, 0.176]} scale={[1.023, 1.023, 0.951]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.009"]}
        position={[0.484, 1.704, 0.184]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.009"]}
        position={[-0.802, 1.358, 0.103]}
        rotation={[0, 0, 2.377]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.014"]}
        position={[1.231, 0.244, 0.182]}
        scale={[0.057, 0.057, 0.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.014"]}
        position={[-1.251, 0.244, 0.182]}
        scale={[0.057, 0.057, 0.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.014"]}
        position={[0.087, 0.244, 0.509]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.057, 0.057, 0.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.014"]}
        position={[0.087, 0.244, -0.176]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.057, 0.057, 0.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.016"]}
        position={[1.201, 0.712, 0.502]}
        rotation={[1.296, 0, 0]}
        scale={[0.078, 0.078, 0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.016"]}
        position={[-1.203, 0.712, 0.502]}
        rotation={[1.296, 0, 0]}
        scale={[0.078, 0.078, 0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.016"]}
        position={[1.201, 0.712, -0.212]}
        rotation={[1.848, 0, 0]}
        scale={[0.078, 0.078, 0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.016"]}
        position={[-1.203, 0.712, -0.212]}
        rotation={[1.848, 0, 0]}
        scale={[0.078, 0.078, 0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.011"]}
        position={[1.939, 1.279, 0.642]}
        scale={[0.026, 0.063, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.011"]}
        position={[1.939, 1.279, -0.32]}
        scale={[0.026, 0.063, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.001"]}
        position={[-1.831, 0.896, 0.187]}
        rotation={[Math.PI, 0, 3.048]}
        scale={[0.026, 0.063, 0.673]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.006"]}
        position={[-1.722, 1.243, -0.4]}
        rotation={[0, 0, 1.035]}
        scale={[0.094, 0.024, 0.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.005"]}
        position={[-1.722, 1.243, -0.4]}
        rotation={[0, 0, 1.035]}
        scale={[0.094, 0.024, 0.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.006"]}
        position={[-1.722, 1.243, 0.552]}
        rotation={[0, 0, 1.035]}
        scale={[0.064, 0.017, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.005"]}
        position={[-1.722, 1.243, 0.552]}
        rotation={[0, 0, 1.035]}
        scale={[0.064, 0.017, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.006"]}
        position={[-1.722, 1.243, 0.767]}
        rotation={[0, 0, 1.035]}
        scale={[0.094, 0.024, 0.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.005"]}
        position={[-1.722, 1.243, 0.767]}
        rotation={[0, 0, 1.035]}
        scale={[0.094, 0.024, 0.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.006"]}
        position={[-1.722, 1.243, -0.168]}
        rotation={[0, 0, 1.035]}
        scale={[0.064, 0.017, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.005"]}
        position={[-1.722, 1.243, -0.168]}
        rotation={[0, 0, 1.035]}
        scale={[0.064, 0.017, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.008"]}
        position={[0.136, 0.723, 0.176]}
        scale={[1.023, 1.023, 0.951]}
      />
      <group position={[0, -0.741, 0]} scale={22.018}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.019"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.020"]}
        position={[5.855, -0.125, 5.737]}
        scale={0.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.020"]}
        position={[6.308, -0.125, 5.737]}
        scale={0.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.020"]}
        position={[6.308, -0.125, 6.269]}
        scale={0.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.020"]}
        position={[6.308, 0.308, 6.269]}
        scale={0.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[-3.606, -0.157, 8.992]}
        scale={0.349}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        position={[-3.503, 0.246, 8.834]}
        scale={0.349}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[-3.132, -0.208, 8.949]}
        scale={0.349}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[-3.906, -0.109, 8.924]}
        scale={0.349}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[-3.906, -0.259, 8.359]}
        scale={0.349}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={nodes.Icosphere005.material}
        position={[1.005, -0.141, -7.573]}
        scale={0.255}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={nodes.Icosphere006.material}
        position={[1.081, 0.153, -7.688]}
        scale={0.255}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={nodes.Icosphere007.material}
        position={[1.351, -0.178, -7.604]}
        scale={0.255}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={nodes.Icosphere008.material}
        position={[0.786, -0.105, -7.623]}
        scale={0.255}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={nodes.Icosphere009.material}
        position={[0.786, -0.215, -8.035]}
        scale={0.255}
      />
      <group position={[-6.109, 0.894, -5.948]} scale={0.716}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[-5.345, 0.856, -6.009]} scale={0.716}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[-5.333, 0.834, -5.321]} scale={0.716}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[10.515, 0.574, -9.898]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[11.109, 0.544, -9.945]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[11.118, 0.528, -9.411]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[1.219, 0.574, 12.062]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[1.813, 0.544, 12.015]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[1.822, 0.528, 12.549]} scale={0.556}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group position={[-2.271, 1.91, -2.143]} scale={[-0.068, -1.126, -0.068]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group position={[-14.43, 1.91, -2.143]} scale={[-0.068, -1.126, -0.068]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group position={[11.063, 1.91, -2.143]} scale={[-0.068, -1.126, -0.068]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_1.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group
        position={[14.056, 1.91, 3.386]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-0.068, -1.126, -0.068]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033_1.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group
        position={[2.34, 1.91, 3.386]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-0.068, -1.126, -0.068]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group
        position={[-10.629, 1.91, 3.386]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-0.068, -1.126, -0.068]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_1.geometry}
          material={materials["Material.025"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/MONSTERTRUCKwithoulightstreetlamb.glb");
