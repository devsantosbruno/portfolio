"use client";

import type { Dispatch, SetStateAction } from "react";
import type { ModalStateType } from ".";

type ProjectType = {
	index: number;
	title: string;
	setModal: Dispatch<SetStateAction<ModalStateType>>;
};

export function Project({ index, title, setModal }: ProjectType) {
	return (
		<div
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}
			className="w-full py-12 border-t-[1px] border-t-black last-of-type:border-b-[1px] border-b-black hover:bg-lime-400 transition duration-700 group"
		>
			<div className="containerTeste flex justify-between items-center">
				<h2 className="lg:text-[60px] m-0 font-thin transition duration-500 group-hover:-translate-x-4 text-[#242424]">
					{title}
				</h2>
				<p className="transition duration-700 font-light group-hover:-translate-x-4 text-[#242424]">
					Design & Development
				</p>
			</div>
		</div>
	);
}
