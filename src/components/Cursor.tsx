"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { isDesktop } from "react-device-detect";

export function Cursor() {
	if (isDesktop) {
		const cursorX = useMotionValue(-100);
		const cursorY = useMotionValue(-100);

		useEffect(() => {
			const moveCursor = (e: any) => {
				cursorX.set(e.clientX - 16);
				cursorY.set(e.clientY - 16);
			};

			window.addEventListener("mousemove", moveCursor);

			return () => {
				window.removeEventListener("mousemove", moveCursor);
			};
		}, [cursorX, cursorY]);

		return (
			<motion.div
				className="fixed left-0 top-0 w-8 h-8 hover:w-20 hover:h-20 rounded-2xl mix-blend-difference bg-lime-400 z-[99] pointer-events-none transition duration-500 ease-out"
				style={{
					translateX: cursorX,
					translateY: cursorY,
				}}
			/>
		);
	}
}
