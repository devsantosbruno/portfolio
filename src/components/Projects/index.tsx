"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { Project } from "./Project";

export type ModalStateType = {
	active: boolean;
	index: number;
};

export type ProjectsType = {
	title: string;
	src: string;
	color: string;
};

const projects: ProjectsType[] = [
	{
		title: "C2 Montreal",
		src: "c2montreal.png",
		color: "#000000",
	},
	{
		title: "Office Studio",
		src: "officestudio.png",
		color: "#8C8C8C",
	},
	{
		title: "Locomotive",
		src: "locomotive.png",
		color: "#EFE8D3",
	},
	{
		title: "Silencio",
		src: "silencio.png",
		color: "#706D63",
	},
];

export function Projects() {
	const [modal, setModal] = useState<ModalStateType>({
		active: false,
		index: 0,
	});

	return (
		<>
			{projects.map((project, index) => {
				return (
					<Project
						index={index}
						title={project.title}
						setModal={setModal}
						key={project.title}
					/>
				);
			})}
			<Modal modal={modal} projects={projects} />
		</>
	);
}
