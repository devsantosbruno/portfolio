import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ModalStateType, ProjectsType } from ".";

const scaleAnimation = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: {
		scale: 1,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		scale: 0,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

type ModalProps = {
	modal: ModalStateType;
	projects: ProjectsType[];
};

export function Modal({ modal, projects }: ModalProps) {
	const { active, index } = modal;
	const modalContainer = useRef(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	useEffect(() => {
		//Move Container
		const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
			duration: 0.8,
			ease: "power3",
		});
		const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
			duration: 0.8,
			ease: "power3",
		});
		//Move cursor
		const xMoveCursor = gsap.quickTo(cursor.current, "left", {
			duration: 0.5,
			ease: "power3",
		});
		const yMoveCursor = gsap.quickTo(cursor.current, "top", {
			duration: 0.5,
			ease: "power3",
		});
		//Move cursor label
		const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
			duration: 0.45,
			ease: "power3",
		});
		const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
			duration: 0.45,
			ease: "power3",
		});

		window.addEventListener("mousemove", (e) => {
			const { pageX, pageY } = e;
			xMoveContainer(pageX);
			yMoveContainer(pageY);
			xMoveCursor(pageX);
			yMoveCursor(pageY);
			xMoveCursorLabel(pageX);
			yMoveCursorLabel(pageY);
		});
	}, []);

	return (
		<>
			<motion.div
				ref={modalContainer}
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}
				className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
			>
				<div
					style={{
						top: index * -100 + "%",
						transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
					}}
					className="h-full w-full absolute"
				>
					{projects.map((project, index) => {
						const { src, color } = project;
						return (
							<div
								className="h-full w-full flex items-center justify-center"
								style={{ backgroundColor: color }}
								key={`modal_${index}`}
							>
								<Image
									src={`/images/${src}`}
									width={300}
									height={0}
									alt="image"
									className="h-auto"
								/>
							</div>
						);
					})}
				</div>
			</motion.div>

			<motion.div
				ref={cursor}
				className="w-[80px] h-[80px] rounded-full bg-lime-400 opacity-60 absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}
			/>
			<motion.div
				ref={cursorLabel}
				className="w-[80px] h-[80px] rounded-full bg-lime-400 text-[#242424] absolute z-20 flex items-center justify-center text-sm font-black pointer-events-none"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}
			>
				VIEW
			</motion.div>
		</>
	);
}
