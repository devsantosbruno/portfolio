"use client";

import { RoundedButton } from "@/common/RoundedButton";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { Nav } from "./Nav";

type TabTitle = "Bruno | Software Developer" | "We miss you 😢";

export function Header() {
	const [tabTitle, setTabTitle] = useState<TabTitle>(
		"Bruno | Software Developer",
	);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const mainTop = document.getElementById("main");
		mainTop?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

		window.addEventListener("resize", () => {
			if (isDesktop) {
				location.reload();
			}
		});

		document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "hidden") {
				return setTabTitle("We miss you 😢");
			}

			if (document.visibilityState === "visible") {
				return setTabTitle("Bruno | Software Developer");
			}
		});

		localStorage.setItem("firstAccess", JSON.stringify(true));
		setTimeout(() => {
			localStorage.removeItem("firstAccess");
		}, 5000);
	}, []);

	useEffect(() => {
		if (isActive) {
			setIsActive(false);
		}
	}, [pathname]);

	useEffect(() => {
		document.title = tabTitle;
	}, [tabTitle]);

	return (
		<>
			<div className="fixed right-0 z-50">
				<RoundedButton
					onClick={() => {
						setIsActive((prevState) => !prevState);
					}}
					className="relative m-6 w-20 h-20 rounded-full bg-[#242424] cursor-pointer flex items-center justify-center shadow-2xl"
				>
					<div
						className={`w-full relative z-50 before:block before:h-px before:w-2/5 before:m-auto before:bg-white before:relative before:transition before:duration-500 after:block after:h-px after:w-2/5 after:m-auto after:bg-white after:relative after:transition after:duration-500 ${
							isActive
								? "burgerActive before:top-0 before:-rotate-45 before:bg-white after:-top-px after:rotate-45 after:bg-white"
								: "before:top-1 after:-top-1"
						}`}
					/>
				</RoundedButton>
			</div>

			<AnimatePresence mode="wait">
				{isActive && <Nav closeMenu={setIsActive} />}
			</AnimatePresence>
		</>
	);
}
