"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ParallaxText } from "./ParallaxText";

export function BannerAndAbout() {
	const [heightImage, setHeightImage] = useState(0);

	useEffect(() => {
		const imageHeight =
			document.getElementById("mainBannerHeight")?.offsetHeight;

		setHeightImage(imageHeight as number);
	}, []);

	return (
		<section className="h-screen w-screen flex flex-col items-center py-20 relative">
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
					"--tw-gradient-to-position": `${heightImage}px`,
				}}
			/>

			<div className="absolute inset-x-0 bottom-10 pointer-events-none flex justify-center items-center">
				<div className="w-7 h-14 rounded-full border-[1px] border-lime-400 relative overflow-hidden">
					<div className="w-4 h-4 rounded-full bg-lime-400 absolute top-0 inset-x-0 mx-auto animate-scrollDown" />
				</div>
			</div>
		</section>
	);
}
