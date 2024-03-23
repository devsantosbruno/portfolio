import Link from "next/link";

export function Footer() {
	return (
		<div className="flex w-full justify-between text-xs gap-10">
			<Link href="https://www.instagram.com/devbrunosantos/" target="_blank">
				Instagram
			</Link>
			<Link href="https://github.com/devsantosbruno" target="_blank">
				GitHub
			</Link>
			<Link href="https://www.linkedin.com/in/devsantosbruno/" target="_blank">
				LinkedIn
			</Link>
		</div>
	);
}
