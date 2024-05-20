"use client";

import { Container } from "@/components";
import { useScroll } from "@/hooks/useScroll";
import { projects } from "@/mocks/projects";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectSummary } from "./components/ProjectSummary";

const firstColumn = projects.slice(0, Math.ceil(projects.length / 2));
const secondColumn = projects.slice(
	Math.ceil(projects.length / 2),
	projects.length,
);

export default function Projects() {
	const container = useRef(null);
	const scrollPage = useScroll(container, ["start end", "end start"]);
	const height = useTransform(scrollPage, [0, 1.01], [50, 0]);
	const background = useTransform(
		scrollPage,
		[0.16, 0.33, 0.66],
		["#ffffff", "#a3e635", "#000000"],
	);

	return (
		<motion.section
			ref={container}
			className="z-10 relative pt-20"
			style={{ background }}
			id="contact"
		>
			<Container className="min-h-[125vh]">
				<h1 className="text-[3.75rem] md:text-[8rem] bg-clip-text text-transparent bg-gradient-to-r from-black to-40% to-lime-400 mb-16 md:mb-24 font-black tracking-tighter leading-[0.8]">
					PROJECTS
					<br />
					DEVELOPED
					<br />
					BY ME
				</h1>

				<div className="grid grid-cols-2 gap-10">
					<div className="flex flex-col gap-40">
						{firstColumn.map((item, index) => (
							<ProjectSummary key={item.slug} index={index} project={item} />
						))}
					</div>

					<div className="flex flex-col gap-20">
						{secondColumn.map((item, index) => (
							<ProjectSummary
								key={item.slug}
								index={index}
								project={item}
								negative
							/>
						))}
					</div>
				</div>
			</Container>

			<motion.div style={{ height }} className="relative mt-28">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-contact" />
			</motion.div>
		</motion.section>
	);
}
