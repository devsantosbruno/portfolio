"use client";

import { useEffect, useRef, useState } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

export function Input({ placeholder, ...field }: InputProps) {
	const titleRef = useRef(null);
	const [titleRefValue, setTitleRefValue] = useState(placeholder);
	const { value, name } = { ...field } as ControllerRenderProps;

	const ID = `input-${name}`;

	useEffect(() => {
		if (value.length > 0) {
			return setTitleRefValue(value);
		}
		setTitleRefValue(placeholder);
	}, [value, placeholder]);

	useEffect(() => {
		if (titleRef.current) {
			const { offsetWidth } = titleRef.current;
			const elementStyle = document.getElementById(ID)?.style;

			if (elementStyle) {
				elementStyle.minWidth = `${placeholder.length + 8}px`;

				if (titleRefValue.length > 0) {
					elementStyle.width = `${offsetWidth / 16}rem`;
				}
			}
		}
	}, [titleRefValue, ID, placeholder]);

	return (
		<>
			<div className="absolute opacity-0 pointer-events-none">
				<h2
					className="text-4xl text-white inline-flex break-words"
					ref={titleRef}
				>
					{titleRefValue.length === 0 ? placeholder : titleRefValue}
				</h2>
			</div>

			<input
				type="text"
				id={ID}
				className="inline-flex text-lime-400 bg-transparent border-none outline-none placeholder:text-[#242424] max-w-[85vw]"
				placeholder={titleRefValue?.length > 0 ? placeholder : ""}
				{...field}
			/>
		</>
	);
}
