"use client";

import { Container } from "@/components";
import { animatePageIn } from "@/components/PageTransition/animation";
import type { ProjectType } from "@/mocks/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type NextProject = {
	project: ProjectType;
	projectsQuantity: number;
};

export function NextProject({ project, projectsQuantity }: NextProject) {
	const { slug, title, banner } = project;

	const router = useRouter();

	const enjoyingText = "keep enjoying";
	const [enjoyingSize, setEnjoyingSize] = useState(
		Math.floor(window.innerWidth / enjoyingText.length - 16),
	);

	window.addEventListener("resize", () => {
		const widthSize = window.innerWidth;
		setEnjoyingSize(Math.floor(widthSize / enjoyingText.length));
	});

	return (
		<div className="bg-white text-center text-black">
			<Container>
				<div className="py-40 lg:pt-80 lg:pb-52 flex justify-center text-center items-center">
					<h2
						className="uppercase text-black font-thin text-center tracking-widest leading-[0.8] px-4 py-4"
						style={{ fontSize: `${(enjoyingSize * 1.5) / 16}rem` }}
					>
						{enjoyingText}
					</h2>
				</div>

				<div className="flex justify-center items-center border-b border-black">
					<div className="relative overflow-hidden group">
						<div className="mb-8 lg:-mb-8">
							<span className="text-2xl font-thin tracking-tighter leading-[0.8]">
								Next Project
							</span>
							<div className="lg:group-hover:scale-75 transition duration-500 mt-5">
								<h2 className="text-8xl font-bold tracking-tighter leading-[0.8] text-black lg:group-hover:text-slate-800 transition duration-1000">
									{title}
								</h2>
							</div>
						</div>

						<Image
							src={`/images/${banner}`}
							width={800}
							height={800}
							className="w-full max-w-[600px] h-[400px] object-cover object-center lg:translate-y-[300px] lg:group-hover:translate-y-0 transition duration-500 shadow-2xl shadow-black"
							alt={`${title} preview`}
						/>

						<button
							type="button"
							className="absolute inset-0 z-20"
							onClick={() => animatePageIn(`/projects/${slug}`, router, title)}
						/>
					</div>
				</div>

				<button
					type="button"
					className="mx-auto mt-20 w-fit flex items-center justify-center rounded-full border px-10 py-3 font-thin bg-[#242424] lg:hover:bg-lime-400 border-white lg:hover:border-lime-400 text-white lg:hover:text-[#242424] shadow-2xl lg:hover:shadow-lime-400 transition duration-500"
					onClick={() => animatePageIn("/projects", router)}
				>
					all projects<sup>{projectsQuantity}</sup>
				</button>
			</Container>
		</div>
	);
}
