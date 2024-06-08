import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<div className="flex w-full justify-between text-xs gap-10">
			<Link
				href="https://www.instagram.com/devbrunosantos/"
				className="flex items-center gap-1"
				target="_blank"
			>
				<InstagramIcon size={16} strokeWidth={1} />
				Instagram
			</Link>

			<Link
				href="https://github.com/devsantosbruno"
				className="flex items-center gap-1"
				target="_blank"
			>
				<GithubIcon size={16} strokeWidth={1} />
				GitHub
			</Link>

			<Link
				href="https://www.linkedin.com/in/devsantosbruno/"
				className="flex items-center gap-1"
				target="_blank"
			>
				<LinkedinIcon size={16} strokeWidth={1} />
				LinkedIn
			</Link>
		</div>
	);
}
