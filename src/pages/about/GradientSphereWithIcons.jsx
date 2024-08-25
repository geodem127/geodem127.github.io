import { useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@mui/material";
// import IconPlane from "./IconPlane"; // We'll create this component next
const sphereRadius = 2.75;
const GradientSphere = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (materialRef.current) {
      const vertexShader = `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec3 vNormal;
        void main() {
          vec3 topColor = vec3(1.0, 0.0, 0.0);  // Red
          vec3 bottomColor = vec3(0.0, 0.0, 1.0);  // Blue
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 1, 0)), 2.0);
          gl_FragColor = vec4(mix(topColor, bottomColor, intensity), 0.3);
        }
      `;

      materialRef.current.onBeforeCompile = (shader) => {
        shader.vertexShader = vertexShader;
        shader.fragmentShader = fragmentShader;
      };
      materialRef.current.needsUpdate = true;
    }
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[sphereRadius, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

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
      <planeGeometry args={[0.65, 0.65, 3, 3]} />
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

const GradientSphereWithIcons = ({ techStack = [] }) => {
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

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <GradientSphere />
      </mesh>

      {/* Icons Positioned on the Sphere */}
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
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
};

export default GradientSphereWithIcons;
