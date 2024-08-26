import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const Bubble = () => {
  const bubbleRef = useRef();
  const [velocity, setVelocity] = useState([0.02, 0.02, 0.02]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const screenSize = { width: window.innerWidth, height: window.innerHeight };

  // Update the bubble position and implement bouncing logic
  useFrame(() => {
    const bubble = bubbleRef.current;

    if (bubble) {
      const [vx, vy, vz] = velocity;
      let { x, y, z } = bubble.position;

      // Calculate boundaries based on screen size and bubble's position
      const boundaryX = screenSize.width / window.innerHeight / 2; // Adjust based on aspect ratio
      const boundaryY = 1.5; // These values represent the normalized scene boundaries

      // Bouncing logic on X axis
      if (x >= boundaryX || x <= -boundaryX) setVelocity([-vx, vy, vz]);

      // Bouncing logic on Y axis
      if (y >= boundaryY || y <= -boundaryY) setVelocity([vx, -vy, vz]);

      // Bouncing logic on Z axis (for depth)
      if (z >= 1.5 || z <= -1.5) setVelocity([vx, vy, -vz]);

      // Update bubble position with velocity and slight mouse influence
      bubble.position.x += vx + mouse.x * 0.01;
      bubble.position.y += vy + mouse.y * 0.01;
      bubble.position.z += vz;
    }
  });

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMouse({
        x: (clientX / window.innerWidth) * 2 - 1,
        y: -(clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Sphere ref={bubbleRef} args={[0.2, 32, 32]} position={[0, 0, 0]}>
      <MeshWobbleMaterial
        attach="material"
        color="#04b08b"
        factor={1} // Wobble intensity
        speed={2} // Wobble speed
      />
    </Sphere>
  );
};

export default Bubble;
