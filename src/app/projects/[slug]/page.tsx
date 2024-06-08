"use client";

import { Container } from "@/components";
import { animatePageIn } from "@/components/PageTransition/animation";
import { useScroll } from "@/hooks/useScroll";
import { projects as projectsMock, type ProjectType } from "@/mocks/projects";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { NextProject } from "./components/NextProject";

export default function Project({ params }: { params: ProjectType }) {
	const projects = useMemo(() => {
		let result: ProjectType[] = [];

		projectsMock.forEach((item, index) => {
			if (item.slug === params.slug) {
				const nextOrFirst = projectsMock[index + 1] || projectsMock[0];
				result = [item, nextOrFirst];
			}
		});

		return result;
	}, [params]);

	if (!projects[0]) {
		return notFound();
	}

	const {
		title,
		link,
		creativeTitle,
		year,
		banner,
		jobs,
		resume,
		description,
		mockups,
	} = projects[0];

	const router = useRouter();
	const container = useRef(null);
	const scrollYProgress = useScroll(container, ["start end", "end start"]);
	const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);
	const fontSizeWindowDefault =
		window.innerWidth > 640
			? Math.floor(window.innerWidth / title.length - 16)
			: 20;
	const [fontSizeWindow, setFontSizeWindow] = useState(fontSizeWindowDefault);

	window.addEventListener("resize", () => {
		const widthSize = window.innerWidth;

		if (widthSize > 640) {
			return setFontSizeWindow(Math.floor(widthSize / title.length));
		}

		return setFontSizeWindow(20);
	});

	return (
		<section ref={container} className="z-10 relative bg-white text-white">
			<div className="bg-[#303030] pb-20 lg:pb-40 pt-32 sm:pt-10">
				<Container>
					<div className="flex justify-center items-center gap-5 font-thin tracking-tighter leading-[0.8] relative z-10">
						<button
							type="button"
							className="text-lime-400 font-bold"
							onClick={() => animatePageIn("/projects", router)}
						>
							Projects
						</button>
						<span>#</span>
						<span>{title}</span>
					</div>

					<div className="flex flex-row flex-wrap items-end gap-5 mt-20">
						<h1
							className="font-black tracking-tighter leading-[0.8] text-white mb-0 w-fit text-wrap flex flex-1 shrink-0"
							style={{ fontSize: `${(fontSizeWindow * 1.5) / 16}rem` }}
						>
							{title}
						</h1>

						<Link
							href={link}
							target="_blank"
							className="w-fit flex items-center justify-center rounded-full border px-10 py-3 font-thin bg-transparent hover:bg-lime-400 border-white hover:border-lime-400 text-white hover:text-[#242424] shadow-2xl hover:shadow-lime-400 transition duration-500"
						>
							website live
						</Link>
					</div>

					<hr className="my-10" />

					<div className="mb-8 flex flex-col lg:flex-row justify-between items-end lg:items-center">
						<h2 className="text-4xl font-thin tracking-tighter leading-[0.8]">
							{creativeTitle}
						</h2>

						<span className="mt-4 lg:mt-0 rounded-full border px-6 py-2 bg-transparent border-white text-white font-semibold text-sm tracking-tighter leading-[0.8]">
							{year}
						</span>
					</div>

					<Image
						alt=""
						src={`/images/${banner}`}
						width={1920}
						height={1080}
						className="w-full h-full object-cover max-h-[800px]"
					/>

					<div className="flex flex-col lg:flex-row gap-10 mt-14">
						<div className="flex flex-col shrink-0 text-2xl tracking-tighter leading-[1.1]">
							{jobs.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>

						<span className="text-4xl lg:max-w-[60vw] ml-auto tracking-tighter leading-[1.1]">
							{resume}
						</span>
					</div>
				</Container>
			</div>

			<div className="bg-white text-black pt-20">
				<Container className="grid lg:grid-cols-2 items-start gap-2 lg:gap-20">
					<div className="flex flex-col gap-2 lg:gap-10">
						<div className="flex flex-col gap-2">
							{description.map((item) => (
								<span
									key={item}
									className="text-xl max-w-[500px] tracking-tighter leading-[1.1]"
								>
									{item}
								</span>
							))}
						</div>

						<div className="grid lg:grid-cols-2 gap-2 lg:gap-10">
							{mockups.map(
								(item, index) =>
									index > 0 && (
										<Image
											key={item}
											alt=""
											src={`/images/${item}`}
											width={1920}
											height={1080}
											className="w-full h-full object-contain"
										/>
									),
							)}
						</div>
					</div>

					<Image
						alt=""
						src={`/images/${mockups[0]}`}
						width={600}
						height={600}
						className="object-cover object-center mx-auto"
					/>
				</Container>
			</div>

			{projects[1] && (
				<NextProject
					project={projects[1]}
					projectsQuantity={projectsMock.length}
				/>
			)}

			<motion.div style={{ height }} className="relative mt-28">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-white z-10 absolute shadow-contact" />
			</motion.div>
		</section>
	);
}
