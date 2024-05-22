"use client";

import { useScroll } from "@/hooks/useScroll";
import { courses } from "@/mocks/courses";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";

export function Courses() {
	const container = useRef(null);
	const scrollYProgress = useScroll(container, ["start end", "end start"]);
	const customTransform = useTransform(scrollYProgress, [0, 1], [-3999, 999]);
	const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);

	return (
		<div ref={container} className="z-10 bg-black relative">
			<div className="flex flex-wrap justify-center gap-x-10 gap-y-20 md:gap-y-40 relative overflow-hidden">
				{courses.map((item) => (
					<Card
						key={item.title}
						title={item.title}
						image={item.image}
						link={item.link}
						logo={item.logo}
						techs={item.techs}
					/>
				))}

				<div className="absolute inset-x-0 inset-y-1/2">
					<motion.div
						className="text-9xl sm:text-[12rem] md:text-[15rem] text-[#1d1e21] opacity-60 font-black text-nowrap tracking-tighter leading-[0.2] m-0 -z-10"
						style={{ translateX: customTransform }}
					>
						<span>We Build Good Sh*t </span>
						<span>We Build Good Sh*t </span>
						<span>We Build Good Sh*t </span>
						<span>We Build Good Sh*t </span>
						<span>We Build Good Sh*t </span>
					</motion.div>
				</div>
			</div>

			<motion.div style={{ height }} className="relative mt-28">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-contact" />
			</motion.div>
		</div>
	);
}
