import "./contact.scss";
import { Facebook, Instagram, Mail, LinkedIn } from "@material-ui/icons";
import { Container } from "@material-ui/core";

function Contact() {
	return (
		<div className="contact" id="contact">
			<Container maxWidth="sm">
				<h2>My Social Link are listed below</h2>
				<div>
					<a href="mailto:asilwal222@gmail.com?">
						<Mail />
						asilwal222@gmail.com
					</a>
				</div>
				<div>
					<a href="https://www.facebook.com/arjun.silwal.31/">
						<Facebook />
					</a>
					<a href="https://www.instagram.com/silwal.arjun/">
						<Instagram />
					</a>
					<a href="https://www.linkedin.com/in/arjun-silwal-234a76164/">
						<LinkedIn />
					</a>
				</div>
				<p>I am still updating this site.</p>
				<p>Creator:- Arjun Silwal</p>
			</Container>
		</div>
	);
}

export default Contact;
