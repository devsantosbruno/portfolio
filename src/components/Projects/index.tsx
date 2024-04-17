"use client";

import { Container } from "@/components";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Project } from "./Project";

export type ModalStateType = {
	active: boolean;
	index: number;
};

export type ProjectsType = {
	title: string;
	preview: string;
	color: string;
};

const projects: ProjectsType[] = [
	{
		title: "C2 Montreal",
		preview: "c2montreal.png",
		color: "#000000",
	},
	{
		title: "Office Studio",
		preview: "officestudio.png",
		color: "#8C8C8C",
	},
	{
		title: "Locomotive",
		preview: "locomotive.png",
		color: "#EFE8D3",
	},
	{
		title: "Silencio",
		preview: "silencio.png",
		color: "#706D63",
	},
];

export function Projects() {
	const [indexActive, setIndexActive] = useState(0);

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	useMotionValueEvent(scrollYProgress, "change", (scrollValue) => {
		const valuePerProject = 1 / projects.length;
		setIndexActive(scrollValue / valuePerProject);
	});

	return (
		<section className="bg-white pt-20">
			<Container>
				<h2 className="text-6xl md:text-8xl text-black mb-16 md:mb-24 font-black tracking-tighter">
					PROJECTS
				</h2>
			</Container>

			<div ref={container}>
				{projects.map((project, index) => {
					return (
						<Project
							title={project.title}
							preview={project.preview}
							isActive={index === Math.floor(indexActive)}
							key={project.title}
						/>
					);
				})}
			</div>
		</section>
	);
}
