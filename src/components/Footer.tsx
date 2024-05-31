"use client";

import { RoundedButton } from "@/common/RoundedButton";
import { Container } from "@/components";
import { useScroll } from "@/hooks/useScroll";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { animatePageIn } from "./PageTransition/animation";

export function Footer() {
	const pathname = usePathname();
	const router = useRouter();
	const container = useRef(null);
	const scrollYProgress = useScroll(container, ["start end", "end end"]);
	const x = useTransform(scrollYProgress, [0, 1], [-200, 100]);
	const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [180, 90]);

	function handleClick() {
		if (pathname !== "/contact") {
			return animatePageIn("/contact", router);
		}

		const element = document.getElementById("contact");
		return element?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	return (
		<motion.div style={{ y }} ref={container}>
			<Container className="text-white flex flex-col items-center justify-center bg-[#1d1e21] relative">
				<div className="pt-52 pb-10 md:pb-24 lg:px-40 w-full max-w-[1800px] bg-[#1d1e21]">
					<div className="flex justify-between items-center">
						<div className="flex flex-col">
							<div className="flex items-center gap-4">
								<div className="w-16 h-16 relative rounded-full overflow-hidden">
									<Image
										fill={true}
										alt={"image"}
										src="https://github.com/devsantosbruno.png"
										className="object-cover"
									/>
								</div>

								<h2 className="text-[2.25rem] md:text-[6rem] tracking-tighter leading-[0.8] font-black">
									Let's work
								</h2>
							</div>

							<h2 className="text-[3.75rem] md:text-[7.5rem] tracking-tighter leading-[0.8] font-black">
								together
							</h2>
						</div>

						<motion.svg
							style={{ rotate, scale: 2 }}
							width="9"
							height="9"
							viewBox="0 0 9 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
								fill="white"
							/>
						</motion.svg>
					</div>

					<div className="border-b-[1px] border-b-lime-300 pb-28 relative">
						<motion.div
							style={{ x }}
							className="absolute md:right-[400px] top-7 md:top-4"
						>
							<RoundedButton
								className="w-40 h-40 md:w-48 md:h-48 bg-white text-black rounded-full flex items-center justify-center cursor-pointer shadow-2xl p-0"
								onClick={handleClick}
							>
								<p className="m-0 text-base font-thin z-10 relative">
									get in touch
								</p>
							</RoundedButton>
						</motion.div>
					</div>

					<div className="flex justify-center md:mr-16 mt-32">
						<p>contato@bytrama.com</p>
					</div>

					<div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-10 mt-20">
						<span className="italic font-thin text-end md:text-start">
							2024 © Edition
						</span>

						<div className="flex flex-col gap-4">
							<h3 className="m-0 text-lime-400 font-light text-base">
								Socials
							</h3>

							<div className="flex gap-4">
								<Link
									href="https://www.instagram.com/devbrunosantos/"
									target="_blank"
								>
									Instagram
								</Link>

								<Link href="https://github.com/devsantosbruno" target="_blank">
									GitHub
								</Link>

								<Link
									href="https://www.linkedin.com/in/devsantosbruno/"
									target="_blank"
								>
									LinkedIn
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</motion.div>
	);
}
