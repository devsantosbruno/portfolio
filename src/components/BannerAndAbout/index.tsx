"use client";

import { Container } from "@/components";
import { useScroll } from "@/hooks/useScroll";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ParallaxText } from "./ParallaxText";

export function BannerAndAbout() {
	const firstElementPosition = document
		.getElementById("initialElement")
		?.getBoundingClientRect();
	const secondElementPosition = document
		.getElementById("endElement")
		?.getBoundingClientRect();

	const positionTop = secondElementPosition?.top - firstElementPosition?.top;
	const positionLeft = secondElementPosition?.left - firstElementPosition?.left;

	const container = useRef(null);
	const [heightTeste, setHeightTeste] = useState(0);
	const scrollYProgress = useScroll(container, ["end end", "end start"]);
	const top = useTransform(scrollYProgress, [0, 0.8], [0, positionTop]);
	const left = useTransform(scrollYProgress, [0, 0.8], [0, positionLeft]);
	const color = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8],
		["#fff", "#a3e635", "#fff"],
	);

	useEffect(() => {
		const imageHeight =
			document.getElementById("mainBannerHeight")?.offsetHeight;

		setHeightTeste(imageHeight as number);
	}, []);

	return (
		<>
			<section
				className="h-screen w-screen flex flex-col items-center py-20 relative"
				ref={container}
			>
				<div className="absolute inset-x-0 bottom-0">
					<div className="absolute inset-0 flex flex-col gap-20 justify-center items-center">
						<ParallaxText baseVelocity={1}>
							Bruno Santos Bruno Santos Bruno Santos Bruno Santos Bruno Santos
						</ParallaxText>
						<ParallaxText baseVelocity={-1}>
							Bruno Santos Bruno Santos Bruno Santos Bruno Santos Bruno Santos
						</ParallaxText>
					</div>

					<Image
						alt=""
						src="/images/banner.svg"
						width={1920}
						height={1080}
						className="max-h-screen relative"
						priority
						id="mainBannerHeight"
					/>
				</div>

				<div
					className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10"
					style={{
						// @ts-ignore
						"--tw-gradient-to-position": `${heightTeste}px`,
					}}
				/>

				<div className="absolute inset-x-0 bottom-10 pointer-events-none flex justify-center items-center">
					<div className="w-7 h-14 rounded-full border-[1px] border-lime-400 relative overflow-hidden">
						<div className="w-4 h-4 rounded-full bg-lime-400 absolute top-0 inset-x-0 mx-auto animate-scrollDown" />
					</div>
				</div>

				<Container className="relative mr-auto">
					<h2 className="text-[3.75rem] md:text-[6rem] font-black tracking-tighter leading-[0.8] text-white mb-0">
						<span>Hello </span>
						<motion.span
							id="initialElement"
							style={{
								top,
								left,
								color,
							}}
							className="relative z-10 pointer-events-none"
						>
							W
						</motion.span>

						<span>orld!</span>
					</h2>
				</Container>
			</section>

			<section className="w-screen h-screen relative bg-[#242424] flex flex-col justify-between py-10">
				<Image
					alt=""
					src="/images/about.webp"
					width={1920}
					height={1080}
					className="absolute inset-x-0 bottom-0 object-contain w-full h-full"
				/>

				<Container className="bg-transparent mb-10 grid grid-cols-2 gap-10">
					<h2 className="text-6xl md:text-9xl lg:text-[15rem] text-white mb-24 font-black tracking-tighter leading-[0.8] bg-transparent">
						ABOUT <br /> ME
					</h2>

					<h2 className="text-[3.75rem] md:text-[6rem] font-black tracking-tighter leading-[0.8] text-white mb-0 text-end">
						SOFT
						<span className="opacity-0" id="endElement">
							W
						</span>
						ARE DEVELOPER
					</h2>

					{/* <div className='-mt-80 w-1/2 ml-auto relative z-10 flex flex-col gap-10'>
            <h3 className='text-6xl text-white font-thin'>
              Hello, my name's Bruno, I'm a Tech Lead based in Porto Alegre. At
              Hero99, I serve as a Tech Lead, actively contributing to the
              development of applications, systems, and websites.
            </h3>
            <h3 className='text-6xl text-white font-thin'>
              When I'm not grinding at work, you can catch me pumping iron at
              the gym, honing my poker skills or planning my next adventure to
              explore the world.
            </h3>
          </div> */}
				</Container>
			</section>
		</>
	);
}
