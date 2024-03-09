import { MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export default function Model() {
  const { nodes } = useGLTF('/medias/torrus.glb');
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.016;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        // font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, 0, -1]}
        fontSize={0.5}
        color='white'
        anchorX='center'
        anchorY='middle'
      >
        hello world!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.1}
          backside
        />
      </mesh>
    </group>
  );
}
