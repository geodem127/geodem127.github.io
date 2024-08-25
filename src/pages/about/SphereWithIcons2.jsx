import { useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@mui/material";

// ... (other code remains the same)

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

const SphereWithIcons2 = ({ techStack = [] }) => {
  // ... (other code remains the same)

  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Gradient Sphere */}
      <GradientSphere />

      {/* Icons Positioned on the Sphere */}
      {techIconData.map((icon, index) => {
        return (
          <IconPlane
            key={index}
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

export default SphereWithIcons2;
