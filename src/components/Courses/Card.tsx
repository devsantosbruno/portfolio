import Image from "next/image";
import Link from "next/link";

export type CardProps = {
	title: string;
	image: string;
	logo: string;
	techs: string[];
	link: string;
};

export function Card({ title, image, link, logo, techs }: CardProps) {
	return (
		<div className="text-white w-full md:max-w-[35%] overflow-hidden z-10 px-10">
			<div className="border border-lime-500 rounded-3xl h-[600px] flex relative overflow-hidden">
				<div className="absolute inset-0 rounded-3xl">
					<Image
						src={image}
						width={1920}
						height={1080}
						alt=""
						className="h-full w-full bg-cover rounded-3xl"
					/>
					<Link href={link} target="_blank" className="absolute inset-0" />
				</div>

				<div className="absolute top-5 right-5 bg-lime-700/75 rounded-full h-28 w-28 flex items-center justify-center">
					<Image src={`/${logo}`} width={80} height={80} alt="" />
				</div>
			</div>

			<div className="flex flex-col mt-12">
				<span className="text-[#4B4E4B]">
					{techs.map((item) => `${item}; `)}
				</span>

				<h3 className="text-4xl text-[#FEFEFE] font-semibold mt-2 mb-8">
					{title}
				</h3>

				<div className="flex gap-14 text-[#4B4E4B]">
					<Link
						href={link}
						target="_blank"
						className="hover:text-lime-300 transition duration-300"
					>
						Link
					</Link>
					<span>*</span>
					<Link
						href={link}
						target="_blank"
						className="hover:text-lime-300 transition duration-300"
					>
						Link
					</Link>
				</div>
			</div>
		</div>
	);
}
