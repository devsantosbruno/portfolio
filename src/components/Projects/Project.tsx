import Image from "next/image";

type ProjectType = {
	title: string;
	preview: string;
	isActive: boolean;
};

export function Project({ title, preview, isActive }: ProjectType) {
	return (
		<div
			className={`w-full py-10 border-t-[1px] border-t-black relative last-of-type:border-b-[1px] border-b-black transition duration-700 ${
				isActive && "bg-lime-400"
			}`}
		>
			<div className="containerTeste flex justify-between items-center relative">
				<h2
					className={`lg:text-[60px] m-0 font-thin transition duration-500 max-w-[50vw] ${
						isActive && "-translate-x-4"
					} text-[#242424]`}
				>
					{title}
				</h2>
				<p
					className={`transition duration-700 font-light hidden md:block max-w-[20vw] text-[#242424] ${
						isActive && "-translate-x-4"
					}`}
				>
					Design & Development
				</p>
			</div>

			{isActive && (
				<div className="absolute right-8 md:inset-x-0 bottom-[-50%] z-10 h-[200%] w-[40vw] lg:w-[300px] bg-[#242424] shadow-contact p-4 mx-auto transition duration-1000">
					<Image
						src={`/images/${preview}`}
						width={600}
						height={300}
						alt={`${title} preview`}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			)}
		</div>
	);
}
