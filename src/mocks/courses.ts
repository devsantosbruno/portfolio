import type { CardProps } from "@/components/Courses/Card";

export const courses: CardProps[] = [
	{
		title: "Rocketseat",
		image: "/images/course-rocketseat.png",
		link: "https://rocketseat.com.br/",
		techs: [
			"Back-End",
			"Front-End",
			"Mobile",
			"Clean Code",
			"Career",
			"Soft Skills",
		],
		company: {
			logo: "images/rocketseat.svg",
			link: "https://rocketseat.com.br/",
		},
	},
	{
		title: "JStack",
		image: "/images/course-jstack.png",
		link: "https://jstack.com.br/",
		techs: ["Back-End", "Front-End", "Clean Code"],
		company: {
			logo: "images/jstack.png",
			link: "https://jstack.com.br/",
		},
	},
	{
		title: "Clean Code",
		image: "/images/certificate-clean-code.png",
		link: "https://app.rocketseat.com.br/certificates/1d30065e-4607-4dae-96f9-145fe161b7ff",
		techs: ["Clean Code"],
		company: {
			logo: "images/rocketseat.svg",
			link: "https://rocketseat.com.br/",
		},
	},
	{
		title: "International Career",
		image: "/images/certificate-international-career.png",
		link: "https://app.rocketseat.com.br/certificates/c1f13eb1-ab71-4ae9-97bd-9f299f45e6bd",
		techs: ["Career"],
		company: {
			logo: "images/rocketseat.svg",
			link: "https://rocketseat.com.br/",
		},
	},
];
