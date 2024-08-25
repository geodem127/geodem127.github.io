import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "@emotion/react";

const IcosahedronWithIcons2 = () => {
  const icosahedronRef = useRef();

  const iconTextures = [
    new THREE.TextureLoader().load("./images/javascript.svg"),
    new THREE.TextureLoader().load("./images/html.svg"),
    new THREE.TextureLoader().load("./images/css.svg"),
    new THREE.TextureLoader().load("./images/reactjs.svg"),
    new THREE.TextureLoader().load("./images/nodejs.svg"),
    new THREE.TextureLoader().load("./images/python.svg"),
    new THREE.TextureLoader().load("./images/java.svg"),
  ];

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Icosahedron in the center */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[3, 0]} />
        {Array.from({ length: 20 }).map((_, i) => (
          <meshBasicMaterial
            attach={`material-${i}`}
            map={iconTextures[i % iconTextures.length]}
            key={i}
            side={THREE.DoubleSide}
            transparent={true}
          />
        ))}
      </mesh>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

// import IconPlane from "./IconPlane"; // We'll create this component next

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
      <planeGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial
        map={textureMap}
        transparent={true}
        side={THREE.DoubleSide} // Ensures visibility from both sides
      />
    </mesh>
  );
};
const sphereRadius = 3;
const IcosahedronWithIcons = () => {
  const theme = useTheme();
  const icosahedronRef = useRef();
  const iconData = [
    { texture: "./images/javascript.svg", lat: 0, lon: 0 },
    { texture: "./images/html.svg", lat: 180, lon: 0 },
    { texture: "./images/css.svg", lat: 60, lon: 0 },
    { texture: "./images/reactjs.svg", lat: 45, lon: 0 },
    { texture: "./images/nodejs.svg", lat: -45, lon: -45 },
    { texture: "./images/python.svg", lat: 90, lon: 0 },
    { texture: "./images/java.svg", lat: -90, lon: 0 },
  ];
  const iconTextures = [
    new THREE.TextureLoader().load("./images/javascript.svg"),
    new THREE.TextureLoader().load("./images/html.svg"),
    new THREE.TextureLoader().load("./images/css.svg"),
    new THREE.TextureLoader().load("./images/reactjs.svg"),
    new THREE.TextureLoader().load("./images/nodejs.svg"),
    new THREE.TextureLoader().load("./images/python.svg"),
    new THREE.TextureLoader().load("./images/java.svg"),
  ];
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
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[3, 2]} />
        {Array.from({ length: 20 }).map((_, i) => (
          <meshBasicMaterial
            attach={`material-${i}`}
            map={iconTextures[i % iconTextures.length]}
            key={i}
            side={THREE.DoubleSide}
            transparent={true}
          />
        ))}
        <meshStandardMaterial color={theme.gradients.primary} />
      </mesh>
      {/* <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[3, 0]} />
        {Array.from({ length: 20 }).map((_, i) => (
          <meshBasicMaterial
            attach={`material-${i}`}
            map={iconTextures[i % iconTextures.length]}
            key={i}
            side={THREE.DoubleSide}
            transparent={true}
          />
        ))}
      </mesh> */}

      {/* {iconData.map((icon, index) => {
        const position = convertLatLonToPosition(
          icon.lat,
          icon.lon,
          sphereRadius
        );
        return (
          <IconPlane key={index} position={position} texture={icon.texture} />
        );
      })} */}

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

export default IcosahedronWithIcons;
