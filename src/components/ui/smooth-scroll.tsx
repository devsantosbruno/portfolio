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
				lerp: 0.05,
				duration: 1.5,
				smoothWheel: true,
			}}
		>
			{children}
		</ReactLenis>
	);
}
