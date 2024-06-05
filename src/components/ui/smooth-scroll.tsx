"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

type SmoothScrollType = {
	children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollType) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.09,
				duration: 0.25,
				smoothWheel: true,
			}}
		>
			{children}
		</ReactLenis>
	);
}
