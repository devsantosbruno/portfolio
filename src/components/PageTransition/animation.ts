import gsap from "gsap";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = (
	href: string,
	router: AppRouterInstance,
	title?: string,
) => {
	const animateInProgress = localStorage.getItem("animateInProgress");

	if (!animateInProgress) {
		localStorage.setItem("animateInProgress", "true");
		const pageTransitionElement = document.getElementById(
			"pageTransitionElement",
		);
		const pageTransitionTitle = document.getElementById("pageTransitionTitle");
		if (pageTransitionTitle) {
			if (href === "/") {
				pageTransitionTitle.innerText = "HOME";
			} else if (title) {
				pageTransitionTitle.innerText = title.toUpperCase();
			} else {
				pageTransitionTitle.innerText = href.replace("/", "").toUpperCase();
			}
		}

		const invertDirection = gsap.getProperty(pageTransitionElement, "top");

		if (pageTransitionElement) {
			const tl = gsap.timeline();

			tl.set(pageTransitionElement, {
				top: invertDirection,
				transition: 1.25,
				ease: "expo.out",
			}).to(pageTransitionElement, {
				top: 0,
				transition: 1.25,
				ease: "expo.out",
				onComplete: () => {
					setTimeout(() => {
						router.push(href);
					}, 1500);
					setTimeout(() => {
						animatePageOut(pageTransitionElement, invertDirection);
					}, 2500);
				},
			});
		}
	}
};

export const animatePageOut = (
	element: HTMLElement,
	invertDirection: string | number,
) => {
	if (element) {
		const tl = gsap.timeline();

		tl.set(element, {
			top: 0,
			transition: "top 2s",
			ease: "expo.out",
		}).to(element, {
			top: Number(invertDirection) * -1,
			transition: "top 2s",
			ease: "expo.out",
			onComplete: () => localStorage.removeItem("animateInProgress"),
		});
	}
};
