"use client";

import { Container, Title } from "@/components";
import { useScroll } from "@/hooks/useScroll";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ParallaxText } from "./ParallaxText";

export function BannerAndAbout() {
	const container = useRef(null);
	const [heightTeste, setHeightTeste] = useState(0);
	const scrollYProgress = useScroll(container, ["end end", "end start"]);
	const top = useTransform(scrollYProgress, [0, 0.8], ["0vh", "100vh"]);
	const left = useTransform(
		scrollYProgress,
		[0, 0.8],
		["calc(0% - -40px)", "calc(100% - 80px)"],
	);

	const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 4, 1]);
	const rotateZ = useTransform(
		scrollYProgress,
		[0, 0.4, 0.8],
		["0deg", "180deg", "360deg"],
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
				<div className="containerTest w-full">
					<div className="relative">
						<motion.div
							className="absolute flex gap-1 justify-center text-lime-400 text-6xl font-thin z-50"
							style={{ top, left, scale, rotateZ }}
						>
							<motion.span
								style={{
									scale,
									rotateZ,
									transitionDuration: "0.6s",
								}}
							>
								&#40;
							</motion.span>

							<motion.span
								className="flex flex-col justify-evenly"
								style={{ scale, rotateZ }}
							>
								<div className="w-3 h-3 bg-lime-400" />
								<div className="w-3 h-3 bg-lime-400" />
							</motion.span>
						</motion.div>

						<div className="px-24">
							<Title>HELLO WORLD!</Title>
						</div>
					</div>
				</div>

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
			</section>

			<section className="w-screen h-screen relative bg-[#242424] flex flex-col justify-between">
				<Image
					alt=""
					src="/images/about.webp"
					width={1920}
					height={1080}
					className="absolute inset-x-0 bottom-0 object-contain w-full h-full"
				/>

				<Container className="bg-transparent mb-10">
					<h2 className="text-6xl md:text-9xl lg:text-[15rem] text-white mb-24 font-black tracking-tighter leading-[0.8] bg-transparent">
						ABOUT <br /> ME
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
