import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
	name: string;
	role: string;
	company: string;
	subject: string;
	email: string;
}

export function ContactEmailTemplate({
	name = "",
	role = "",
	company = "",
	subject = "",
	email = "",
}: ContactEmailTemplateProps) {
	return (
		<Html>
			<Head />
			<Preview>
				Você recebeu um contato via website. Clique para visualizar!
			</Preview>
			<Body style={main}>
				<Container style={container}>
					<Text style={userInfo}>Name: {name}</Text>
					<Text style={userInfo}>Role: {role}</Text>
					<Text style={userInfo}>Company: {company}</Text>
					<Text style={userInfo}>Subject: {subject}</Text>
					<Text style={userInfo}>Email: {email}</Text>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#242424",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const userInfo = {
	fontSize: "16px",
	margin: "10px 0 0 0",
	lineHeight: "16px",
	color: "#FFFFFF",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
	color: "#FFFFFF",
	margin: "40px 0 0 0",
};
