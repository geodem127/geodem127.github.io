import { useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
// import IconPlane from "./IconPlane"; // We'll create this component next
const sphereRadius = 2.75;

const IconPlane = ({ position, texture }) => {
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
      <planeGeometry args={[0.25 * sphereRadius, 0.25 * sphereRadius]} />
      <meshBasicMaterial
        map={textureMap}
        transparent={true}
        side={THREE.DoubleSide} // Ensures visibility from both sides
      />
    </mesh>
  );
};

const SphereWithIcons = ({ techStack = [] }) => {
  const iconData0 = [
    { texture: "./images/javascript.svg", lat: 0, lon: 0 },
    { texture: "./images/html.svg", lat: 180, lon: 0 },
    { texture: "./images/css.svg", lat: 60, lon: 0 },
    { texture: "./images/reactjs.svg", lat: 45, lon: 0 },
    { texture: "./images/nodejs.svg", lat: -45, lon: -45 },
    { texture: "./images/python.svg", lat: 90, lon: 0 },
    { texture: "./images/java.svg", lat: -90, lon: 0 },
  ];

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

  // const techIconData = [];
  const uniqueTech = [];
  techStack.forEach((techData) => {
    techData?.technologies?.forEach((uTech) => {
      const cleanString = uTech.replace(/[^a-zA-Z0-9]/g, "")?.toLowerCase();
      if (!uniqueTech?.includes(cleanString)) {
        uniqueTech.push(cleanString);
      }
    });
    // const techArray = techData?.technologies?.map((tech, index) => {
    //   const cleanString = tech.replace(/[^a-zA-Z0-9]/g, "")?.toLowerCase();
    //   return { texture: cleanString, lat: 10 * (index + 1), lon: 0 };
    // });
    // techIconData?.push(...techArray);
    // return { texture: "./images/javascript.svg", lat: 0, lon: 0 };
  });

  console.log("uniqueTech: ", uniqueTech);

  const positions = generateSpherePositions(uniqueTech.length, sphereRadius);

  const techIconData = uniqueTech?.map((tech, index) => {
    return {
      texture: `./images/${tech}.svg`,
      // lat: 20 * (index + 1),
      // lon: 20 * (index + 1),
      position: positions[index],
    };
  });

  console.log("techIconData: ", techIconData);
  console.log("positions: ", positions);
  // Function to convert latitude and longitude to Cartesian coordinates
  const convertLatLonToPosition = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 90) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z];
  };

  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Central Sphere */}
      <mesh>
        <sphereGeometry args={[sphereRadius, 64, 64]} />
        {/* <icosahedronGeometry args={[sphereRadius, 2]} /> */}
        <meshStandardMaterial transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>

      {/* Icons Positioned on the Sphere */}
      {techIconData.map((icon, index) => {
        return (
          <IconPlane
            key={index}
            position={positions[index]}
            texture={icon.texture}
          />
        );
      })}

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
    </Canvas>
  );
};

export default SphereWithIcons;
