"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

export default function Scene() {
	return (
		<Canvas>
			<Model />
			<Environment preset="warehouse" />
		</Canvas>
	);
}
