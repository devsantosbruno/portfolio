import gsap from "gsap";
import { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";

export function RoundedButton({
	children,
	backgroundColor = "#242424",
	...attributes
}: any) {
	const circle = useRef(null);
	const timeline = useRef(null);
	let timeoutId = null;
	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true });
		timeline.current
			.to(
				circle.current,
				{ top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
				"enter",
			)
			.to(
				circle.current,
				{ top: "-150%", width: "125%", duration: 0.25 },
				"exit",
			);
	}, []);

	const manageMouseEnter = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeline.current.tweenFromTo("enter", "exit");
	};

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			timeline.current.play();
		}, 300);
	};

	return (
		<Magnetic>
			<div
				className="rounded-[3em] border border-lime-700 cursor-pointer relative flex items-center justify-center py-4 px-14"
				style={{ overflow: "hidden" }}
				onMouseEnter={() => {
					manageMouseEnter();
				}}
				onMouseLeave={() => {
					manageMouseLeave();
				}}
				{...attributes}
			>
				{children}
				<div
					ref={circle}
					className="w-full h-[150%] absolute rounded-full top-full bg-lime-400"
				/>
			</div>
		</Magnetic>
	);
}
