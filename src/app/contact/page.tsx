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
			email: "",
		},
	});

	async function onSubmit({
		name,
		role,
		company,
		email,
	}: z.infer<typeof formSchema>) {
		setIsLoading(true);

		const emailValidate = email
			?.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);

		if (name && role && company && emailValidate) {
			setTimeout(() => {
				form.reset();
				setIsLoading(false);
				return toast.success("E-mail enviado com sucesso!");
			}, 5000);
		}

		if (!name) {
			toast.error("Preencha o seu Nome");
		}

		if (!role) {
			toast.error("Preencha o seu Cargo");
		}

		if (!company) {
			toast.error("Preencha o nome da Empresa");
		}

		if (!email) {
			toast.error("Preencha o seu Email");
		}

		if (email && !emailValidate) {
			toast.error('Certifique-se de incluir o domínio após o "@".', {
				description: "Por exemplo: email@email.com",
			});
		}

		setIsLoading(false);
	}

	return (
		<section
			ref={container}
			className="z-10 relative bg-black py-20"
			id="contact"
		>
			<Container className="min-h-[125vh]">
				<Title className="uppercase mr-auto pt-[15vh]">
					Preencha os campos e <br /> entraremos em contato
				</Title>

				<Root {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-10  overflow-hidden">
							<h2 className="text-4xl text-white">
								Meu nome é{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<Input placeholder="Bruno" id="inputName" {...field} />
										)}
									/>
									],
								</span>{" "}
								Eu sou{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="role"
										render={({ field }) => (
											<Input
												placeholder="Desenvolvedor"
												id="inputRole"
												{...field}
											/>
										)}
									/>
									],
								</span>{" "}
								Falo em nome da empresa{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="company"
										render={({ field }) => (
											<Input placeholder="Trama" id="inputCompany" {...field} />
										)}
									/>
									],
								</span>{" "}
								Gostaria de marcar uma reunião para entender melhor o trabalho
								de vocês e se minha marca é compatível com o serviço de vocês.
							</h2>

							<h2 className="text-4xl text-white">
								Quer um orçamento? Vamos marcar uma reunião para que possamos
								entender melhor sua empresa e como podemos fazer dela melhor,
								juntos. Qual seu email?{" "}
								<span className="whitespace-nowrap">
									[
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<Input
												placeholder="contato@bytrama.com"
												id="inputEmail"
												{...field}
											/>
										)}
									/>
									],
								</span>{" "}
								Entraremos em contato para um agendamento, muito obrigado.
							</h2>

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

			<motion.div style={{ height }} className="relative mt-28">
				<div className="h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-contact" />
			</motion.div>
		</section>
	);
}
