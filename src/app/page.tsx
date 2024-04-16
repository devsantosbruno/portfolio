import { BannerAndAbout } from "@/components/BannerAndAbout";
import { Courses } from "@/components/Courses";
import { Projects } from "@/components/Projects";
import { Techs } from "@/components/Techs";
import { Title } from "@/components/Title";

export default function Home() {
	return (
		<>
			<BannerAndAbout />

			<section className="w-screen flex flex-col justify-between bg-lime-400 py-20">
				<div className="containerTeste">
					<Title className="text-black uppercase">
						Tech Fusion <br /> Blending Creativity and <br /> Performance for
						Impact
					</Title>
				</div>

				<Techs />
			</section>

			<Projects />

			<section className="py-20 bg-black">
				<div className="containerTeste">
					<h2 className="text-[3.75rem] md:text-[8rem] text-white mb-16 md:mb-24 font-black tracking-tighter leading-[0.8]">
						COURSES
						<br />
						AND
						<br />
						CERTIFIERS
					</h2>
				</div>

				<Courses />
			</section>
		</>
	);
}
