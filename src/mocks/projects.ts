type JobsType =
	| "App Development"
	| "Front-End Development"
	| "Back-End Development"
	| "Design";

export type ProjectType = {
	slug: string;
	title: string;
	creativeTitle: string;
	year: string;
	banner: string;
	mockups: string[];
	link: string;
	jobs: JobsType[];
	resume: string;
	description: string[];
};

export const projects: ProjectType[] = [
	{
		slug: "smiles",
		title: "Smiles",
		year: "2023",
		jobs: ["App Development"],
		link: "https://www.smiles.com.br/appsmiles",
		banner: "projects/smiles-banner.jpg",
		mockups: [
			"projects/smiles-mockup-1.png",
			"projects/smiles-mockup-2.png",
			"projects/smiles-mockup-3.png",
		],
		creativeTitle: "the app that turns miles into unforgettable experiences",
		resume:
			'The Smiles project is the new loyalty app from "GOL Linhas Aéreas", developed to enhance the user experience in accumulating and redeeming miles. Involving team leadership and continuous feedback, the app was designed to offer a user-friendly interface and robust functionality, seamlessly integrating with the needs of modern travelers.',
		description: [
			'The Smiles app, an integral part of "GOL Linhas Aéreas" loyalty program, was created to provide users with a more intuitive and efficient way to manage their miles. As the leader of a squad, my role involved not only technical development but also leading a team of developers, conducting one-on-one feedback sessions, and overseeing the team.',
			"Smiles offers a range of functionalities that allow users to accumulate and redeem miles in various ways, whether for flights, hotel reservations, car rentals, or even purchases from commercial partners.",
			"The project also focused on user experience, implementing user-friendly interfaces and simplifying processes such as ticket issuance and account management. As a result, Smiles stands out as one of the best mileage programs in Brazil, recognized for its efficiency and the wide range of benefits it offers to its more than 13 million customers.",
		],
	},
	{
		slug: "esfera",
		title: "Esfera",
		creativeTitle: "your world of rewards and benefits with Santander",
		year: "2024",
		jobs: ["App Development"],
		link: "https://www.esfera.com.vc/appesfera",
		resume:
			'Esfera is "Banco Santander" loyalty program, offering benefits to customers who accumulate points with their credit cards. Points can be redeemed for products, services, travel, experiences, and cashback.',
		description: [
			"The Esfera project, developed for Banco Santander, is an innovative loyalty and rewards app that allows customers to accumulate points by using their credit cards. Points can be redeemed for a wide range of products, services, travel, experiences, and even cashback. The Esfera app provides an intuitive experience where users can easily check their points balance, redeem rewards, and enjoy exclusive discounts with partners such as Casas Bahia, Extra, Ponto, Magalu, Fast Shop, and Renner.",
		],
		banner: "projects/esfera-banner.png",
		mockups: [
			"projects/esfera-mockup-3.jpg",
			"projects/esfera-mockup-1.png",
			"projects/esfera-mockup-2.png",
		],
	},
	{
		slug: "boticario",
		title: "Boticário Lidera",
		year: "2024",
		banner: "projects/boticario-banner.png",
		mockups: [
			"projects/boticario-mockup-1.png",
			"projects/boticario-mockup-2.jpeg",
			"projects/boticario-mockup-3.png",
		],
		link: "https://apps.apple.com/in/app/lidera-encontro-de-l%C3%ADderes/id6479248142",
		jobs: ["Front-End Development", "Back-End Development"],
		creativeTitle: "transformative platform for leadership and events",
		resume: `"Boticário Lidera" is an app developed for Grupo Boticário's leadership event, facilitating the management and participation of leaders in a unique and transformative experience. This project involved creating an intuitive and efficient digital platform, ensuring an integrated experience for administrators, participants, and collaborators.`,
		description: [
			`"Boticário Lidera" is an innovative app developed for Grupo Boticário's leadership event. The Lidera event aims to empower internal leaders through unique and transformative experiences. The main challenge of this project was to create a digital platform that centralized event management, ensuring an intuitive, fast, and accessible experience for everyone involved.`,
			`In developing this app, I worked on both the front-end and back-end. Close collaboration with Grupo Boticário's digital transformation team allowed for tailored development, aligned with the demands of a large-scale event, and focused on providing users with access to event information, schedules, and the ability to interact with speakers, ensuring a comprehensive and enriching experience.`,
		],
	},
	{
		slug: "casa-3a",
		title: "Casa 3A",
		link: "https://casa-3a.vercel.app/",
		year: "2024",
		jobs: ["Front-End Development"],
		creativeTitle: "explore luxury and nature, your dream stay",
		resume:
			'We developed a CMS-based website for "Casa 3A", located in the exclusive Tivoli Ecoresidence in Praia do Forte, Bahia. This site allows the client to easily manage content and images, providing guests with a clear view of the luxury accommodations and the numerous activities offered.',
		description: [
			"Casa 3A, situated in the Tivoli Ecoresidence in Praia do Forte, is a true haven of luxury and tranquility. This project involved creating a website with a content management system (CMS) that allows the client to easily update and manage site content and images. The website's layout was carefully designed by Studio Nume, ensuring a visually appealing and functional experience.",
			"Casa 3A offers full access to the renowned Tivoli Ecoresort facilities, including pools, gyms, restaurants, bars, and a world-class spa. Guests can enjoy exquisite cuisine, white sandy beaches, and a variety of recreational activities, all surrounded by lush tropical landscapes.",
			"My work on the front-end development and CMS integration was crucial in ensuring an intuitive and satisfying user experience. I maintained continuous communication with the client to ensure all needs were met, providing a digital platform that reflects the excellence and sophistication of Casa 3A.",
			"Casa 3A is ideal for those seeking a luxurious and personalized stay, with all the comfort and tranquility that Tivoli Ecoresort can offer.",
		],
		banner: "projects/casa-3a-banner.png",
		mockups: [
			"projects/casa-3a-mockup-1.png",
			"projects/casa-3a-mockup-2.png",
			"projects/casa-3a-mockup-3.png",
		],
	},
	{
		slug: "moneypot",
		title: "MoneyPot",
		link: "https://moneypot.bet/",
		year: "2023",
		jobs: ["Front-End Development", "Back-End Development"],
		creativeTitle: "sports predictions with Marcelo Zulu and Hero99",
		resume:
			"MoneyPot is a sports prediction website that allows users to forecast outcomes in various sports, focusing on soccer, MMA, and boxing. Developed in partnership with Hero99 and former Big Brother Brasil contestant Marcelo Zulu, the project offers an interactive and engaging platform for sports fans. Content management is streamlined by a robust CMS for the client.",
		description: [
			"The MoneyPot project involves creating a sports prediction website in collaboration with Hero99 and Marcelo Zulu, a renowned MMA fighter and former participant of Big Brother Brasil. This site allows users to make predictions on a wide variety of sports, with a special focus on soccer, MMA, and boxing. The platform is designed to provide an interactive and engaging user experience, combining detailed statistics, predictions, and expert insights.",
			"In addition to functionalities for end-users, the site features an advanced content management system, allowing the client to easily manage and update the displayed information and images. This ensures that the content is always up-to-date and relevant, providing a seamless and high-quality experience for users.",
			"My responsibilities on the project included both front-end and back-end development, as well as acting as the Tech Lead, coordinating the development team.",
		],

		banner: "projects/moneypot-banner.svg",
		mockups: [
			"projects/moneypot-mockup-2.png",
			"projects/moneypot-mockup-3.png",
			"projects/moneypot-mockup-1.png",
		],
	},
	{
		slug: "no-sound",
		title: "No Sound",
		link: "https://realtime-chat-devsantosbrunos-projects.vercel.app/",
		year: "2024",
		jobs: ["Design", "Front-End Development", "Back-End Development"],
		creativeTitle: "connect silently, communicate effectively",
		resume: `"No Sound" is a real-time chat platform designed to eliminate the distraction of audio, focusing exclusively on text communication. The project stands out for its simplicity and efficiency, featuring a modern layout and robust functionalities. I developed the layout, front-end, and back-end, creating an intuitive and seamless chat experience. This experimental project demonstrates the application of advanced technologies in developing communication solutions.`,
		description: [
			`The "No Sound" project was born from the idea of creating a real-time chat platform that promotes efficient communication without the common interruptions of audio. The name "No Sound" reflects this concept, offering a silent yet highly functional chat experience. The interface was designed to be intuitive and pleasant, incorporating my unique style to ensure smooth navigation and quick interaction.`,
			`"No Sound" was created as a study project, highlighting skills in web development and real-time communication. It offers a clear demonstration of the capabilities and potential in developing modern communication platforms.`,
			"This project is not commercial, but it serves as an excellent example of full-stack development possibilities, providing a smooth and efficient user experience in a real-time chat environment.",
		],
		banner: "projects/no-sound-banner.svg",
		mockups: [
			"projects/no-sound-mockup-1.png",
			"projects/no-sound-mockup-2.png",
			"projects/no-sound-mockup-3.png",
		],
	},
	{
		slug: "bruno-shop",
		title: "Bruno Shop",
		link: "https://bruno-shop.vercel.app/",
		year: "2022",
		jobs: ["Front-End Development"],
		creativeTitle: "where style meets technology",
		resume:
			"Bruno Shop is an innovative e-commerce platform developed as a study project by Rocketseat, focused on selling clothing. With integration to Stripe for payments, the site offers a smooth and secure shopping experience. The modern and responsive layout was designed by Rocketseat, while the technical implementation, including the front-end, was my responsibility.",
		description: [
			"The Bruno Shop project represents the perfect fusion of style and technology. This e-commerce platform was created as a practical exercise by Rocketseat to explore the potential of modern platforms like Next.js and Stripe. Focused on selling clothing, Bruno Shop allows users to browse a variety of products, add items to their cart, and make secure payments through integration with Stripe.",
			"Rocketseat, renowned for its excellence in developer training, designed a visually appealing and highly responsive layout, ensuring users have an enjoyable and intuitive shopping experience, whether on desktop or mobile devices.",
			"My role in the project included the complete front-end development, where I utilized React and Next.js to create a dynamic and efficient user interface. Additionally, the integration with Stripe was a crucial component of the project, ensuring the payment process was simple, secure, and reliable.",
			"Bruno Shop exemplifies how the combination of elegant design and robust technical implementation can result in an efficient and enjoyable e-commerce platform, providing a valuable and practical learning experience for developers.",
		],
		banner: "projects/bruno-shop-banner.svg",
		mockups: [
			"projects/bruno-shop-mockup-2.png",
			"projects/bruno-shop-mockup-1.png",
			"projects/bruno-shop-mockup-3.png",
		],
	},
	{
		slug: "course-player",
		title: "Course Player",
		link: "https://video-redux-zustand.vercel.app/",
		year: "2023",
		jobs: ["Front-End Development"],
		creativeTitle: "transforming technology education with Rocketseat",
		resume:
			"Bruno Shop is an innovative e-commerce platform developed as a study project by Rocketseat, focused on selling clothing. With integration to Stripe for payments, the site offers a smooth and secure shopping experience. The modern and responsive layout was designed by Rocketseat, while the technical implementation, including the front-end, was my responsibility.",
		description: [
			"Course Player is an innovative online course platform that offers high-quality educational content. I developed the front-end, creating an intuitive and engaging interface. This study project features Rocketseat's YouTube content, highlighting the company's commitment to excellence in technology education.",
			"I developed this study project in collaboration with Rocketseat, utilizing content from the company's YouTube channel. Rocketseat is known for its practical and effective approach to programming education, and its layout combines modern aesthetics with superior functionality, promoting continuous and interactive learning.",
			"My main responsibility was the front-end development, using React to create a user-friendly and responsive interface. The platform allows students to explore courses composed of videos, practical exercises, and quizzes, ensuring a deep and practical understanding of the subjects.",
			"Course Player exemplifies how technology can be used to create effective and accessible educational tools, promoting continuous learning and empowering new developers.",
		],
		banner: "projects/course-player-banner.svg",
		mockups: [
			"projects/course-player-mockup-1.png",
			"projects/course-player-mockup-2.png",
		],
	},
	{
		slug: "pomodoro",
		title: "Pomodoro",
		link: "https://pomodoro-timer-lemon.vercel.app/",
		year: "2022",
		jobs: ["Front-End Development"],
		creativeTitle: "transform your time with smart productivity",
		resume:
			"Pomodoro is a web application designed to facilitate the practice of the Pomodoro time management technique. Users can name their tasks, track the time dedicated to each one, and view a usage history, all with a user-friendly and intuitive interface developed by Rocketseat.",
		description: [
			'The "Pomodoro" project is a website designed to help users apply the Pomodoro technique in their daily routines. This technique involves working in 25-minute intervals, followed by 5-minute breaks, with longer breaks after four cycles. The site allows users to name their tasks, adjust work and break times to suit their needs, track the progress of time and task names directly in the browser tab, and view a usage history, promoting better productivity tracking.',
			"The layout of the site was carefully developed by Rocketseat, providing a smooth and modern user experience. In this project, I was responsible for the front-end development, using modern web development technologies and methodologies.",
			"This application is a study project, developed to enhance technical skills in JavaScript and React, as well as to explore best practices in design and usability.",
		],
		banner: "projects/pomodoro-banner.svg",
		mockups: [
			"projects/pomodoro-mockup-1.png",
			"projects/pomodoro-mockup-2.png",
			"projects/pomodoro-mockup-3.png",
		],
	},
	{
		slug: "coffee-delivery",
		title: "Coffee Delivery",
		link: "https://coffee-delivery-flame-nine.vercel.app/",
		year: "2022",
		jobs: ["Front-End Development"],
		creativeTitle: "perfect coffee at your doorstep",
		resume:
			"Coffee Delivery is an e-commerce website for coffee enthusiasts, offering an intuitive and personalized shopping experience. Users can select their favorite coffees, provide delivery details, and choose their payment method, all within an elegant interface developed by Rocketseat. This project, focused on front-end development, highlights the integration of design and technology to create an efficient and enjoyable shopping platform.",
		description: [
			`The "Coffee Delivery" project is an e-commerce platform developed to provide coffee lovers with a simple and effective shopping experience. The site's interface allows users to choose from a variety of coffees, add products to their cart, and complete their purchase by providing a delivery address and selecting a payment method.`,
			`Developed as part of Rocketseat's Ignite course, the Coffee Delivery layout was designed by Rocketseat's design team, ensuring an attractive and functional visual experience. My contribution to the project included the complete front-end development, utilizing modern technologies such as ReactJS and TypeScript to create a responsive and interactive interface.`,
			"Although this is a test project and not linked to a real client, it demonstrates essential skills in e-commerce development, from implementing a sophisticated design to the checkout functionality. The experience gained from this project is valuable for future developments in online sales platforms.",
		],
		banner: "projects/coffee-delivery-banner.svg",
		mockups: [
			"projects/coffee-delivery-mockup-2.png",
			"projects/coffee-delivery-mockup-3.png",
			"projects/coffee-delivery-mockup-1.png",
		],
	},
];
