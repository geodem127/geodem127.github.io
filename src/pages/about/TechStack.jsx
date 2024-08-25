import React, { useRef, useLayoutEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
// import * as THREE from "three";

import {
  TextureLoader,
  Scene,
  OrthographicCamera,
  Matrix4,
  DoubleSide,
} from "three";
import { Canvas, useFrame, useThree, createPortal } from "@react-three/fiber";
import { Sphere, useTexture, OrbitControls } from "@react-three/drei";

//  {
//          radius?: number,
//         widthSegments?: number,
//         heightSegments?: number,
//         phiStart?: number,
//         phiLength?: number,
//         thetaStart?: number,
//         thetaLength?: number,
//     }

const TechStackStyles = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "1rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  outline: "2px dashed yellow",
  outlineOffset: "-2px",
  flexGrow: 1,
}));

function ThreeBox(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Viewcube() {
  const {
    gl,
    scene: defaultScene,
    camera: defaultCamera,
    size,
    events,
  } = useThree();
  const [scene] = useState(() => new Scene());
  const [camera] = useState(
    () => new OrthographicCamera(-1, 1, 1, -1, 0.1, 1000)
  );

  useLayoutEffect(() => {
    camera.left = -size.width / 2;
    camera.right = size.width / 2;
    camera.top = size.height / 2;
    camera.bottom = -size.height / 2;
    camera.position.set(0, 0, 100);
    camera.updateProjectionMatrix();
  }, [size]);

  const ref = useRef(null);
  const [hover, set] = useState(null);
  const matrix = new Matrix4();

  useFrame(() => {
    matrix.copy(defaultCamera.matrix).invert();
    ref.current.quaternion.setFromRotationMatrix(matrix);
    gl.autoClear = true;
    gl.render(defaultScene, defaultCamera);
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene, camera);
  }, 1);

  return (
    <>
      {createPortal(
        <group>
          <mesh
            ref={ref}
            position={[size.width / 2 - 300, size.height / 2 - 300, 0]}
            onPointerOut={(e) => set(null)}
            onPointerMove={(e) => set(Math.floor((e.faceIndex || 0) / 2))}
          >
            {[...Array(6)].map((_, index) => (
              <meshLambertMaterial
                attach={`material-${index}`}
                key={index}
                color={hover === index ? "hotpink" : "white"}
              />
            ))}
            <boxGeometry args={[100, 100, 100]} />
          </mesh>
          <ambientLight intensity={0.5 * Math.PI} />
          <pointLight decay={0} position={[10, 10, 10]} intensity={0.5} />
        </group>,
        scene,
        { camera, events: { priority: events.priority + 1 } }
      )}
    </>
  );
}

const SphereGeometry1 = () => {
  const textures = useTexture({
    javascript: "./images/javascript.svg",
    html: "./images/html.svg",
    css: "./images/css.svg",
    reactjs: "./images/reactjs.svg",
    nodejs: "./images/nodejs.svg",
    python: "./images/python.svg",
    java: "./images/java.svg",
  });
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      ref={ref}
      //   scale={clicked ? 1.5 : 1}
      //   onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      {/* <sphereGeometry args={[1.5, 24, 24]} /> */}
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
      {/* <sphereGeometry args={[5, 24, 24]} /> */}
      <Sphere args={[2, 64, 64]} scale={2}>
        {/* Apply each texture to a section of the sphere */}
        <meshStandardMaterial
          attachArray="material"
          map={textures.javascript}
        />
        <meshStandardMaterial attachArray="material" map={textures.html} />
        <meshStandardMaterial attachArray="material" map={textures.css} />
        <meshStandardMaterial attachArray="material" map={textures.reactjs} />
        <meshStandardMaterial attachArray="material" map={textures.nodejs} />
        <meshStandardMaterial attachArray="material" map={textures.python} />
        <meshStandardMaterial attachArray="material" map={textures.java} />
      </Sphere>
      <meshStandardMaterial color={"transparent"} />
    </mesh>
  );
};
const SphereGeometry = () => {
  const iconData = [
    { texture: "./images/javascript.svg", position: [2, 0, 0] },
    { texture: "./images/html.svg", position: [-2, 0, 0] },
    { texture: "./images/css.svg", position: [0, 2, 0] },
    { texture: "./images/reactjs.svg", position: [0, -2, 0] },
    { texture: "./images/nodejs.svg", position: [0, 0, 2] },
    { texture: "./images/python.svg", position: [0, 0, -2] },
    { texture: "./images/java.svg", position: [1.5, 1.5, 1.5] },
  ];

  return (
    <>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {iconData.map((icon, index) => (
        <mesh position={icon.position} key={index}>
          <planeGeometry args={[0.75, 0.75]} />
          <meshBasicMaterial
            map={new TextureLoader().load(icon.texture)}
            transparent={true}
          />
        </mesh>
      ))}
    </>
  );
};

const SphereWithIcons = () => {
  const sphereRadius = 2;

  const iconData = [
    { texture: "./images/javascript.svg", lat: 0, lon: 0 },
    { texture: "./images/html.svg", lat: 45, lon: 45 },
    { texture: "./images/css.svg", lat: -45, lon: 45 },
    { texture: "./images/reactjs.svg", lat: 45, lon: -45 },
    { texture: "./images/nodejs.svg", lat: -45, lon: -45 },
    { texture: "./images/python.svg", lat: 90, lon: 0 },
    { texture: "./images/java.svg", lat: -90, lon: 0 },
  ];

  const convertLatLonToPosition = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z];
  };

  const convertLatLonToRotation = (lat, lon) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const rotationX = Math.cos(phi) * Math.sin(theta);
    const rotationY = Math.sin(phi);
    const rotationZ = Math.cos(phi) * Math.cos(theta);

    return [rotationX, rotationY, rotationZ];
  };

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Sphere in the center */}
      <mesh>
        <sphereGeometry args={[sphereRadius, 64, 64]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Map each icon to a plane, position them on the sphere, and orient them correctly */}
      {iconData.map((icon, index) => {
        const position = convertLatLonToPosition(
          icon.lat,
          icon.lon,
          sphereRadius
        );
        const rotation = new Vector3(...position).normalize();

        return (
          <mesh position={position} rotation={rotation} key={index}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshBasicMaterial
              map={new TextureLoader().load(icon.texture)}
              transparent={true}
              side={DoubleSide} // Ensure the icon is visible from all angles
            />
          </mesh>
        );
      })}

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

const TechStack = ({ data, index }) => {
  return (
    <TechStackStyles>
      <Canvas style={{ height: "100vh" }}>
        {/* <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        {/* <ThreeBox position={[-1.2, 0, 0]} /> *1/}
      {/* <ThreeBox position={[1.2, 0, 0]} /> */}
        {/* <Viewcube /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <SphereGeometry />
        {/* <OrbitControls /> */}
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </TechStackStyles>
  );
};

export default TechStack;
