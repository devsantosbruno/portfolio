"use client";

import { InfiniteMovingCards } from "@/components/ui";
import { techs } from "@/mocks/techs";
import { useEffect, useState } from "react";

export function Techs() {
	const [arrayNormalized, setArrayNormalized] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const minimalForLine = 8;

	function calculateNumberOfLines(items: string[], minimalForLine: number) {
		let rowsQuantity = minimalForLine;

		for (let i = minimalForLine; i >= 3; i--) {
			if (items.length % i === 0 && items.length / i >= minimalForLine) {
				rowsQuantity = i;
				break;
			}
		}

		return rowsQuantity;
	}

	function splitArrayOfObjectsIntoFractions(
		array: string[],
		numFracoes: number,
	) {
		const fractionSize = Math.ceil(array.length / numFracoes);
		const fractionList = [];

		for (let i = 0; i < array.length; i += fractionSize) {
			const fraction = array.slice(i, i + fractionSize);
			fractionList.push(fraction);
		}

		setArrayNormalized(fractionList as any);
	}

	useEffect(() => {
		setIsLoading(true);
		const calculatedRows = calculateNumberOfLines(techs as any, minimalForLine);
		splitArrayOfObjectsIntoFractions(techs as any, calculatedRows);

		setIsLoading(false);
	}, []);

	return (
		!isLoading && (
			<div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
				{arrayNormalized.map((_, index) => (
					<InfiniteMovingCards
						items={arrayNormalized[index]}
						direction={index % 2 === 0 ? "right" : "left"}
						speed="normal"
						key={index}
					/>
				))}
			</div>
		)
	);
}
