import { motion } from "framer-motion";
import Link from "next/link";
import { scale, slide } from "../animation";

export function Item({ data, isActive, setSelectedIndicator }: any) {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-3 h-3 bg-white rounded-full absolute -left-8"
			/>
			<Link
				href={href}
				className="hover:text-lime-400 font-black transition duration-500 tracking-tighter"
			>
				{title}
			</Link>
		</motion.div>
	);
}
