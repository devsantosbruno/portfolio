"use client";

import { Container, Input, Title } from "@/components";
import { FormField, Form as Root } from "@/components/ui";
import { useScroll } from "@/hooks/useScroll";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useTransform } from "framer-motion";
import { LoaderIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
	name: z.string().optional(),
	role: z.string().optional(),
	company: z.string().optional(),
	subject: z.string().optional(),
	email: z.string().optional(),
});

export default function Contact() {
	const container = useRef(null);
	const scrollYProgress = useScroll(container, ["start end", "end start"]);
	const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			role: "",
			company: "",
			subject: "",
			email: "",
		},
	});

	async function onSubmit({
		name,
		role,
		company,
		subject,
		email,
	}: z.infer<typeof formSchema>) {
		toast.dismiss();

		const emailValidate = email
			?.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);

		if (name && role && subject && emailValidate) {
			setIsLoading(true);
			const mailValues: z.infer<typeof formSchema> = {
				name,
				role,
				company,
				subject,
				email,
			};

			const response = await fetch("/api/mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(mailValues),
			});

			form.reset();

			if (response.status === 200) {
				toast.success("Email sent successfully!");
				return setIsLoading(false);
			}

			toast.error("An error occurred. Please try again later!");
			return setIsLoading(false);
		}

		if (!name) {
			toast.error("Name is required.");
		}

		if (!role) {
			toast.error("Role is required.");
		}

		if (!subject) {
			toast.error("Subject is required.");
		}

		if (!email) {
			toast.error("Email is required.");
		}

		if (email && !emailValidate) {
			toast.error('Make sure to include the domain after the "@".', {
				description: "For example: email@email.com",
			});
		}
	}

	return (
		<section ref={container} className="z-10 relative bg-black" id="contact">
			<Container className="min-h-[100vh]">
				<Title className="uppercase mr-auto pt-[15vh]">
					FILL IN THE FIELDS AND <br /> WE WILL GET IN TOUCH
				</Title>

				<Root {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-10 overflow-hidden">
							<h2 className="text-4xl text-white">
								My name is{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<Input placeholder="Bruno*" {...field} />
										)}
									/>
									].
								</span>{" "}
								I am a{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="role"
										render={({ field }) => (
											<Input placeholder="Developer*" {...field} />
										)}
									/>
									].
								</span>{" "}
								I speak on behalf of the company{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="company"
										render={({ field }) => (
											<Input placeholder="Trama" {...field} />
										)}
									/>
									].
								</span>{" "}
								I would like to count on you to{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="subject"
										render={({ field }) => (
											<Input placeholder="develop an app*" {...field} />
										)}
									/>
									].
								</span>{" "}
								Exploring a possible collaboration, contributing your skills so
								we can achieve our common goals.
							</h2>

							<h2 className="text-4xl text-white">
								I eagerly await your response at{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<Input placeholder="contato@bytrama.com*" {...field} />
										)}
									/>
									].
								</span>{" "}
								So that we can schedule a conversation and explore the
								possibility of working together on a truly exciting project.
							</h2>
							<h2 className="text-4xl text-white">Thank you very much!</h2>

							<div className="mt-5 flex justify-end">
								<button
									type="submit"
									disabled={isLoading}
									className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#a3e635,55%,#000103)] bg-[length:200%_100%] disabled:bg-none disabled:opacity-50 px-10 py-3 font-medium text-slate-400 transition-colors"
								>
									{isLoading ? (
										<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
									) : (
										"submit"
									)}
								</button>
							</div>
						</div>
					</form>
				</Root>
			</Container>

			<motion.div style={{ height }} className="relative">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-contact" />
			</motion.div>
		</section>
	);
}
