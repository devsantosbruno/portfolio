import { BannerAndAbout, Container, Courses, Projects } from "@/components";

export default function Home() {
	return (
		<>
			<BannerAndAbout />

			<Projects />

			<section className="py-20 bg-black">
				<Container>
					<h2 className="text-[3.75rem] md:text-[8rem] text-white mb-16 md:mb-24 font-black tracking-tighter leading-[0.8]">
						COURSES
						<br />
						AND
						<br />
						CERTIFIERS
					</h2>
				</Container>

				<Courses />
			</section>
		</>
	);
}
