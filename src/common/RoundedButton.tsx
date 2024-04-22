import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { isDesktop } from "react-device-detect";
import Magnetic from "./Magnetic";

type RoundedButtonType = {
	children: React.ReactNode;
	className?: string;
	onClick: () => void;
};

export function RoundedButton({
	children,
	className,
	onClick,
}: RoundedButtonType) {
	const circleRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	let timeoutId: NodeJS.Timeout | null = null;
	const ref = useRef(null);

	useEffect(() => {
		if (circleRef.current) {
			timelineRef.current = gsap.timeline({ paused: true });
			timelineRef.current
				.to(
					circleRef.current,
					{ top: "-25%", width: "150%", duration: 0.5, ease: "power3.in" },
					"enter",
				)
				.to(
					circleRef.current,
					{ top: "-150%", width: "125%", duration: 0.25 },
					"exit",
				);
		}
	}, []);

	const manageMouseEnter = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		if (timelineRef.current) {
			timelineRef.current.tweenFromTo("enter", "exit");
		}
	};

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			if (timelineRef.current) {
				timelineRef.current.play();
			}
		}, 300);
	};

	function manageOnClick() {
		if (!isDesktop) {
			manageMouseEnter();
			manageMouseLeave();
		}
	}

	return (
		<Magnetic>
			<div
				ref={ref}
				className={cn(
					"rounded-[3em] cursor-pointer relative flex items-center justify-center",
					className,
				)}
				style={{ overflow: "hidden" }}
				onMouseEnter={() => isDesktop && manageMouseEnter()}
				onMouseLeave={() => isDesktop && manageMouseLeave()}
				onClick={() => {
					onClick();
					manageOnClick();
				}}
			>
				{children}
				<div
					ref={circleRef}
					className="w-full h-[150%] absolute rounded-full top-full bg-lime-400"
				/>
			</div>
		</Magnetic>
	);
}
