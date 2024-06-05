"use client";

import { Container } from "@/components";
import { animatePageIn } from "@/components/PageTransition/animation";
import { useScroll } from "@/hooks/useScroll";
import { projects, type ProjectType } from "@/mocks/projects";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

export default function Project({ params }: { params: ProjectType }) {
	const project = useMemo(
		() => projects.filter((item) => item.slug === params.slug)[0],
		[params],
	);

	if (!project) {
		return notFound();
	}

	const router = useRouter();
	const container = useRef(null);
	const scrollYProgress = useScroll(container, ["start end", "end start"]);
	const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);
	const [fontSizeWindow, setFontSizeWindow] = useState(
		Math.floor(window.innerWidth / project.title.length - 16),
	);

	window.addEventListener("resize", () => {
		const widthSize = window.innerWidth;
		setFontSizeWindow(Math.floor(widthSize / project.title.length));
	});

	return (
		<section ref={container} className="z-10 relative bg-white text-white">
			<div className="bg-[#303030] pt-10 pb-40">
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
						<span>{project.title}</span>
					</div>

					<div className="flex flex-col lg:flex-row items-end gap-5 mt-20">
						<h1
							className="font-black tracking-tighter leading-[0.8] text-white mb-0 w-fit text-nowrap flex flex-1 shrink-0"
							style={{ fontSize: `${(fontSizeWindow * 1.5) / 16}rem` }}
						>
							{project.title}
						</h1>

						<Link
							href={project.link}
							target="_blank"
							className="w-fit flex items-center justify-center rounded-full border px-10 py-3 font-thin bg-transparent hover:bg-lime-400 border-white hover:border-lime-400 text-white hover:text-[#242424] shadow-2xl hover:shadow-lime-400 transition duration-500"
						>
							website live
						</Link>
					</div>

					<hr className="my-10" />

					<div className="mb-8 flex flex-col lg:flex-row justify-between items-end lg:items-center">
						<h2 className="text-4xl font-thin tracking-tighter leading-[0.8]">
							{project.creativeTitle}
						</h2>

						<span className="rounded-full border px-6 py-2 bg-transparent border-white text-white font-semibold text-sm tracking-tighter leading-[0.8]">
							{project.year}
						</span>
					</div>

					<Image
						alt=""
						src={`/images/${project.banner}`}
						width={1920}
						height={1080}
						className="w-full h-full object-cover max-h-[800px]"
					/>

					<div className="flex flex-col lg:flex-row gap-10 mt-14">
						<div className="flex flex-col shrink-0 text-2xl tracking-tighter leading-[0.8]">
							{project.jobs.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>

						<span className="text-4xl lg:max-w-[60vw] ml-auto tracking-tighter leading-[0.8]">
							{project.resume}
						</span>
					</div>
				</Container>
			</div>

			<div className="bg-white text-black pt-20">
				<Container className="grid lg:grid-cols-2 items-start gap-2 lg:gap-20">
					<div className="flex flex-col gap-2 lg:gap-10">
						<div className="flex flex-col gap-2">
							{project.description.map((item) => (
								<span
									key={item}
									className="text-xl max-w-[500px] tracking-tighter leading-[0.8]"
								>
									{item}
								</span>
							))}
						</div>

						<div className="grid lg:grid-cols-2 gap-2 lg:gap-10">
							{project.mockups.map(
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
						src={`/images/${project.mockups[0]}`}
						width={600}
						height={600}
						className="object-cover object-center mx-auto"
					/>
				</Container>
			</div>

			<motion.div style={{ height }} className="relative mt-28">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-white z-10 absolute shadow-contact" />
			</motion.div>
		</section>
	);
}
