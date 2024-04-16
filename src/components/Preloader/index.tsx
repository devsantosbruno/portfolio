"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
	"Hello",
	"Moïen",
	"Olá",
	"Halløj",
	"Bonjour",
	"Hola",
	"你好",
	"Hallo",
	"مرحبا",
	"Ciao",
];

export function Preloader() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index === words.length - 1) {
			return;
		}
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index === 0 ? 1500 : 150,
		);
	}, [index]);

	return (
		<motion.div
			className="fixed inset-x-0 z-[88] cursor-wait overflow-hidden h-[200vh]"
			initial={{ top: 0 }}
			animate={{ top: "-200vh" }}
			transition={{ duration: 2, delay: 3.5 }}
		>
			<div className="h-screen w-screen bg-[#1d1e21] flex items-center justify-center">
				<motion.p
					className="text-lime-400 text-[5rem] font-black leading-[0.8] tracking-tighter my-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.25 }}
				>
					{words[index]}
				</motion.p>
			</div>

			<motion.div
				className="-ml-[10vw] w-[120vw] bg-[#1d1e21] rounded-b-full"
				initial={{ top: "100vh", height: "100vh" }}
				animate={{ top: 0, height: "25vh" }}
				transition={{ duration: 1, delay: 3.5 }}
			/>
		</motion.div>
	);
}
