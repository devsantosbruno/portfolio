import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from "framer-motion";
import { useRef } from "react";
import { Title } from "../Title";

type ParallaxProps = {
	children: string;
	baseVelocity: number;
};

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
			<motion.div
				className="flex gap-4 whitespace-nowrap flex-nowrap uppercase"
				style={{ x }}
			>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
				<Title className="mb-0 md:mb-0">{children}</Title>
			</motion.div>
		</div>
	);
}
