import {
	BannerAndAbout,
	Container,
	Courses,
	Projects,
	Techs,
	Title,
} from "@/components";

export default function Home() {
	return (
		<>
			<BannerAndAbout />

			<section className="w-screen flex flex-col justify-between bg-lime-400 py-20">
				<Container>
					<Title className="text-black uppercase">
						Tech Fusion <br /> Blending Creativity and <br /> Performance for
						Impact
					</Title>
				</Container>

				<Techs />
			</section>

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
