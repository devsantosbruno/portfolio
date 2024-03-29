import { useScroll as useScrollFramerMotion } from "framer-motion";

export function useScroll(Target: any, Offset: any) {
	const { scrollYProgress } = useScrollFramerMotion({
		target: Target,

		offset: Offset,
	});

	return scrollYProgress;
}
