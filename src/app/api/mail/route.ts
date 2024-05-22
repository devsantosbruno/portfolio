import { render } from "@react-email/render";
import { Resend } from "resend";
import { ContactEmailTemplate } from "../../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
	const { name, role, company, subject, email } = await request.json();

	const { data, error } = await resend.emails.send({
		from: "Contato via Website <onboarding@resend.dev>",
		to: "devbrunosantos@gmail.com",
		subject: subject,
		html: render(ContactEmailTemplate({ name, role, company, subject, email })),
	});

	if (error) {
		return Response.json(error);
	}

	return Response.json({ message: "Email sent successfully" });
}
