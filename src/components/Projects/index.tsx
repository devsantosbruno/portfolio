"use client";

import { Container } from "@/components";
import { projects } from "@/mocks/projects";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { animatePageIn } from "../PageTransition/animation";
import { Project } from "./Project";

export type ModalStateType = {
	active: boolean;
	index: number;
};

export function Projects() {
	const router = useRouter();
	const [indexActive, setIndexActive] = useState(0);
	const [fontSizeWindow, setFontSizeWindow] = useState(
		Math.floor(window.innerWidth / "see all".length),
	);

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const fourFirstsProjects = projects.slice(0, 4);

	useMotionValueEvent(scrollYProgress, "change", (scrollValue) => {
		const valuePerProject = 1 / fourFirstsProjects.length;
		setIndexActive(scrollValue / valuePerProject);
	});

	window.addEventListener("resize", () => {
		const widthSize = window.innerWidth;
		setFontSizeWindow(Math.floor(widthSize / "see all".length));
	});

	return (
		<section className="bg-white pt-20">
			<Container>
				<h2 className="text-6xl md:text-8xl text-black mb-16 md:mb-24 font-black tracking-tighter">
					PROJECTS
				</h2>
			</Container>

			<div ref={container}>
				{fourFirstsProjects.map((project, index) => {
					return (
						<Project
							title={project.title}
							preview={project.banner}
							link={project.slug}
							isActive={index === Math.floor(indexActive)}
							setIndexActive={setIndexActive}
							index={index}
							key={project.title}
						/>
					);
				})}
			</div>

			<div className="flex items-center justify-center overflow-hidden">
				<button
					type="button"
					className="text-black font-black tracking-tighter leading-[0.8]"
					onClick={() => animatePageIn("/projects", router)}
					style={{ fontSize: `${(fontSizeWindow * 1.5) / 16}rem` }}
				>
					see all
				</button>
			</div>
		</section>
	);
}
