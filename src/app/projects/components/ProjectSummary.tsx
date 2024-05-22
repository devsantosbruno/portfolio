import { Title } from "@/components";
import { animatePageIn } from "@/components/PageTransition/animation";
import { useScroll } from "@/hooks/useScroll";
import type { ProjectType } from "@/mocks/projects";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type ProjectSummaryProps = {
	negative?: boolean;
	index: number;
	project: ProjectType;
};

export function ProjectSummary({
	negative,
	index,
	project,
}: ProjectSummaryProps) {
	const ref = useRef(null);
	const contato = useScroll(ref, ["start end", "end start"]);
	const router = useRouter();

	const y = useTransform(contato, [0, 1], [100, -100 + index]);
	const yNegative = useTransform(contato, [0, 1], [300, -300 + index]);

	return (
		<div
			className="flex items-center justify-center overflow-visible"
			ref={ref}
		>
			<motion.div style={{ y: negative ? yNegative : y }}>
				<div className="bg-black relative group">
					<Image
						width={600}
						height={600}
						src={`/images/${project.banner}`}
						alt=""
						className="absolute inset-0 w-full h-full object-cover opacity-25 lg:opacity-100 lg:group-hover:opacity-25 transition duration-1000"
					/>

					<div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-1000 min-h-[600px] md:min-w-[600px] p-5 lg:p-10 text-white text-5xl relative flex flex-col justify-between">
						<div>
							<Title className="mb-8 md:mb-8">{project.title}</Title>

							<p className="text-2xl font-thin">{project.resume}</p>
						</div>

						<div className="flex justify-end">
							<span className="rounded-full border px-6 py-2 bg-transparent border-white text-white font-semibold text-sm tracking-tighter leading-[0.8]">
								{project.year}
							</span>
						</div>
					</div>

					<button
						type="button"
						className="absolute inset-0"
						onClick={() =>
							animatePageIn(`/projects/${project.slug}`, router, project.title)
						}
					/>
				</div>
			</motion.div>
		</div>
	);
}
