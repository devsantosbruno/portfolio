import gsap from "gsap";
import { cloneElement, useEffect, useRef } from "react";
import { isDesktop } from "react-device-detect";

export default function Magnetic({
	children,
}: {
	children: React.ReactElement;
}) {
	const magnetic = useRef<HTMLDivElement>(null);

	if (isDesktop) {
		useEffect(() => {
			if (magnetic.current) {
				const xTo = gsap.quickTo(magnetic.current, "x", {
					duration: 1,
					ease: "elastic.out(1, 0.3)",
				});
				const yTo = gsap.quickTo(magnetic.current, "y", {
					duration: 1,
					ease: "elastic.out(1, 0.3)",
				});

				magnetic.current.addEventListener("mousemove", (e) => {
					if (magnetic.current) {
						const { clientX, clientY } = e;
						const { height, width, left, top } =
							magnetic.current.getBoundingClientRect();
						const x = clientX - (left + width / 2);
						const y = clientY - (top + height / 2);
						xTo(x * 1);
						yTo(y * 1);
					}
				});

				magnetic.current.addEventListener("mouseleave", (e) => {
					xTo(0);
					yTo(0);
				});
			}
		}, []);
	}

	return cloneElement(children, { ref: magnetic });
}
