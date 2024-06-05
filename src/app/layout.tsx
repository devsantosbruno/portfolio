import {
	Cursor,
	Footer,
	Header,
	PageTransition,
	Preloader,
} from "@/components";
import { SmoothScroll } from "@/components/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bruno | Software Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactElement;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<body className={inter.className}>
				<Cursor />
				<Preloader />
				<Header />

				<SmoothScroll>
					<main className="min-h-screen w-screen bg-black">
						<PageTransition />

						{children}
						<Toaster richColors closeButton className="z-[98]" />
					</main>
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
