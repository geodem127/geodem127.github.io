import { useRef, useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { styled } from "@mui/material";

const sphereRadius = 2.5;

const CanvasStyles = styled(Canvas)(({ theme }) => ({
  width: "50%",
}));

const IconPlane = ({ position, texture }) => {
  const meshRef = useRef();
  const textureMap = useLoader(THREE.TextureLoader, texture);

  useEffect(() => {
    if (meshRef.current) {
      const direction = new THREE.Vector3(...position).normalize();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        direction
      );
      meshRef.current.quaternion.copy(quaternion);
    }
  }, [position, textureMap]);

  return (
    <mesh position={position} ref={meshRef}>
      <planeGeometry args={[0.5, 0.5, 3, 3]} />
      <meshBasicMaterial
        map={textureMap}
        transparent={true}
        shadowSide={THREE.DoubleSide}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const SphereWithIcons = ({ techStack = [] }) => {
  const generateSpherePositions = (count, radius) => {
    const positions = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push([x, y, z]);
    }

    return positions;
  };

  const uniqueTech = useMemo(() => {
    const techSet = new Set();
    techStack.forEach((techData) => {
      techData?.technologies?.forEach((uTech) => {
        const cleanString = uTech.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        techSet.add(cleanString);
      });
    });
    return Array.from(techSet);
  }, [techStack]);

  const positions = useMemo(
    () => generateSpherePositions(uniqueTech.length, sphereRadius),
    [uniqueTech.length]
  );

  const techIconData = useMemo(
    () =>
      uniqueTech.map((tech, index) => ({
        texture: `/images/${tech}.svg`,
        position: positions[index],
      })),
    [uniqueTech, positions]
  );

  return (
    <CanvasStyles>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <mesh>
        {techIconData.map((icon, index) => (
          <IconPlane
            key={index}
            position={icon.position}
            texture={icon.texture}
          />
        ))}
      </mesh>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </CanvasStyles>
  );
};

export default SphereWithIcons;
