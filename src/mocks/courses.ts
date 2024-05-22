import type { CardProps } from "@/components/Courses/Card";

export const courses: CardProps[] = [
	{
		title: "Rocketseat",
		image: "/images/locomotive.png",
		logo: "images/rocketseat.svg",
		link: "https://rocketseat.com.br/",
		techs: [
			"Back-End",
			"Front-End",
			"Mobile",
			"Clean Code",
			"Career",
			"Soft Skills",
		],
	},
	{
		title: "JStack",
		image: "/images/c2montreal.png",
		logo: "images/jstack.png",
		link: "https://jstack.com.br/",
		techs: ["Back-End", "Front-End", "Clean Code"],
	},
	{
		title: "Clean Code",
		image: "/images/officestudio.png",
		logo: "images/rocketseat.svg",
		link: "https://app.rocketseat.com.br/certificates/1d30065e-4607-4dae-96f9-145fe161b7ff",
		techs: ["Clean Code"],
	},
	{
		title: "International Career",
		image: "/images/silencio.png",
		logo: "images/rocketseat.svg",
		link: "https://app.rocketseat.com.br/certificates/c1f13eb1-ab71-4ae9-97bd-9f299f45e6bd",
		techs: ["Career"],
	},
];
