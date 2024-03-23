"use client";

import { useEffect, useState } from "react";

export default function Input() {
	const [testeInput, setTesteInput] = useState("");
	const [numberSize, setNumberSize] = useState(0);

	useEffect(() => {
		setNumberSize(testeInput.length + 1);
	}, [testeInput]);

	// text-pink-400

	return (
		<input
			type="text"
			className="inline-flex text-lime-400 bg-transparent border-none outline-none"
			onChange={(e) => setTesteInput(e.target.value)}
			style={{
				width: numberSize === 1 ? 16 : numberSize + "rem",
			}}
			required
		/>
	);
}
