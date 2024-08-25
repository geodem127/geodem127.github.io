import { useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTheme, styled } from "@mui/material";
// import IconPlane from "./IconPlane"; // We'll create this component next
const sphereRadius = 2.5;

const CanvasStyles = styled(Canvas)(({ theme }) => ({
  // outline: "1px dashed red",
  // outlineOffset: "-1px",
  width: "50%",
}));

const IconPlane = ({ position, texture, color }) => {
  const meshRef = useRef();

  // Load the texture using useLoader for efficient loading
  const textureMap = useLoader(THREE.TextureLoader, texture);

  useEffect(() => {
    if (meshRef.current) {
      // Calculate the direction vector from the center to the position
      const [x, y, z] = position;
      const direction = new THREE.Vector3(x, y, z).normalize();

      // Create a quaternion that rotates the plane to face outward
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1), // Original orientation of the plane
        direction // Desired orientation
      );

      // Apply the rotation to the mesh
      meshRef.current.quaternion.copy(quaternion);
    }
  }, [position]);

  return (
    <mesh position={position} ref={meshRef}>
      {/* <planeGeometry args={[0.25 * sphereRadius, 0.25 * sphereRadius]} /> */}
      <planeGeometry args={[0.5, 0.5, 3, 3]} />
      <meshBasicMaterial
        map={textureMap}
        transparent={true}
        shadowSide={THREE.DoubleSide}
        // color={color}
        // refractionRatio={0.95}
        side={THREE.DoubleSide} // Ensures visibility from both sides
        // opacity={1}
      />
    </mesh>
  );
};

const SphereWithIcons = ({ techStack = [] }) => {
  const theme = useTheme();
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

  const uniqueTech = [];
  techStack.forEach((techData) => {
    techData?.technologies?.forEach((uTech) => {
      const cleanString = uTech.replace(/[^a-zA-Z0-9]/g, "")?.toLowerCase();
      if (!uniqueTech?.includes(cleanString)) {
        uniqueTech.push(cleanString);
      }
    });
  });

  const positions = generateSpherePositions(uniqueTech.length, sphereRadius);
  const techIconData = uniqueTech?.map((tech, index) => {
    return {
      texture: `./images/${tech}.svg`,
      position: positions[index],
    };
  });

  return (
    <CanvasStyles>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <mesh>
        <sphereGeometry args={[sphereRadius]} />
        <meshStandardMaterial
          transparent
          opacity={0.02}
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>
      {techIconData.map((icon, index) => {
        return (
          <IconPlane
            key={index}
            // position={positions[index]}
            position={icon.position}
            texture={icon.texture}
            color={theme.palette.primary.main}
          />
        );
      })}

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </CanvasStyles>
  );
};

export default SphereWithIcons;
