import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery, useTheme } from "@mui/material";
import config from "../../config";

const sphereRadius = 2.65;

const generateSpherePositions = (count, radius) => {
	const positions = [];
	const goldenRatio = (1 + Math.sqrt(5)) / 2;

	for (let i = 0; i < count; i++) {
		const theta = (2 * Math.PI * i) / goldenRatio;
		const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
		positions.push([
			radius * Math.sin(phi) * Math.cos(theta),
			radius * Math.sin(phi) * Math.sin(theta),
			radius * Math.cos(phi),
		]);
	}

	return positions;
};

const IconPlane = ({ position, texture }) => {
	const meshRef = useRef();
	const textureMap = useLoader(THREE.TextureLoader, texture);

	const direction = new THREE.Vector3(...position).normalize();
	const quaternion = new THREE.Quaternion().setFromUnitVectors(
		new THREE.Vector3(0, 0, 1),
		direction
	);

	return (
		<mesh position={position} ref={meshRef} quaternion={quaternion}>
			<planeGeometry args={[0.6, 0.6]} />
			<meshBasicMaterial map={textureMap} transparent side={THREE.DoubleSide} />
		</mesh>
	);
};

const TechStack = ({ techStack = [] }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [techIconData, setTechIconData] = useState([]);

	const uniqueTech = useMemo(() => {
		const techSet = new Set();
		techStack.forEach((techData) =>
			techData?.technologies?.forEach((uTech) =>
				techSet.add(uTech.replace(/[^a-zA-Z0-9]/g, "").toLowerCase())
			)
		);
		return Array.from(techSet);
	}, [techStack]);

	useEffect(() => {
		const positions = generateSpherePositions(uniqueTech.length, sphereRadius);
		setTechIconData(
			uniqueTech.map((tech, index) => ({
				// texture: `/geodem127.github.io/images/${tech}.svg`,
				texture: `${config.API_ENDPOINT}/media/images/${tech}.svg`,
				position: positions[index],
			}))
		);
	}, [uniqueTech]);

	return (
		<Canvas
			style={{
				width: smScreen ? "80%" : "60%",
				aspectRatio: "1",
				// height: "300px",
				// height: "500px",
			}}
		>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />

			{techIconData.map((icon, index) => (
				<IconPlane
					key={index}
					position={icon.position}
					texture={icon.texture}
				/>
			))}

			<OrbitControls
				enableZoom={false}
				autoRotate
				autoRotateSpeed={0.6}
				enablePan={false}
			/>
		</Canvas>
	);
};

export default TechStack;
