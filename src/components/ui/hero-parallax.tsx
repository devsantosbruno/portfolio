"use client";
import {
	type MotionValue,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroParallax = ({
	techs,
}: {
	techs: {
		title: string;
		link: string;
		image: string;
	}[];
}) => {
	const firstRow = techs.slice(0, 5);
	const secondRow = techs.slice(5, 10);
	const thirdRow = techs.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.25, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
		springConfig,
	);
	return (
		<div
			ref={ref}
			className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />

			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>

				<motion.div className="flex flex-row mb-20 space-x-20">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>

				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
			<h1 className="text-2xl md:text-7xl font-bold text-white">
				Tech Fusion <br /> Blending Creativity and Performance for Impact
			</h1>

			<p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200 font-light">
				Take a peek into my digital arsenal, where creativity is the ultimate
				key to unlock top-notch performance. Here, you'll find the latest and
				most widely used technologies, all ready to be shaped into innovative
				solutions.
			</p>
			<p className="max-w-2xl text-base md:text-xl mt-4 text-neutral-200 font-light">
				Join me on this journey where creativity rules and performance is the
				rule. Let's explore the vast territory of technological potential
				together and create something truly outstanding. Come along with me and
				let's make our mark in the digital world!
			</p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		image: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product max-w-[30rem] relative flex-shrink-0"
		>
			<Link
				href={product.link}
				className="block group-hover/product:shadow-2xl"
			>
				<Image
					src={`/images/${product.image}`}
					height={0}
					width={0}
					className="object-cover w-full h-full"
					alt={product.title}
				/>
			</Link>

			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-40 bg-black pointer-events-none" />

			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
