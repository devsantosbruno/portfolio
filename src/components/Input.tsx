"use client";

import { useEffect, useRef, useState } from "react";

export function Input() {
	const ref = useRef(null);

	const [width, setWidth] = useState(0);
	const [testeInput, setTesteInput] = useState("");

	useEffect(() => {
		const { offsetWidth }: any = ref.current;
		setWidth(offsetWidth);
	}, [testeInput]);

	return (
		<>
			<div className="absolute opacity-0">
				<h2 className="text-4xl text-white inline-flex break-words" ref={ref}>
					{testeInput}
				</h2>
			</div>

			<input
				type="text"
				className="inline-flex text-lime-400 bg-transparent border-none outline-none"
				onChange={(e) => setTesteInput(e.target.value)}
				style={{
					width: width === 0 ? 16 : `${(width + 8) / 16}rem`,
				}}
				required
			/>
		</>
	);
}
