import { Button, Container, TextField } from "@material-ui/core";

function Contact({ formData, setForm, navigation }) {
	const style = {
		backgroundColor: "white",
	};
	const { phone, email } = formData;
	return (
		<div style={style}>
			<Container maxWidth="xs">
				<h3>Contact</h3>
				<TextField
					label="Phone"
					name="phone"
					value={phone}
					onChange={setForm}
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					required
				/>
				<TextField
					label="Email"
					name="email"
					value={email}
					onChange={setForm}
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					required
				/>
				<div style={{ marginTop: "1rem" }}>
					<Button
						variant="contained"
						color="primary"
						style={{ marginRight: "1rem" }}
						onClick={navigation.previous}
					>
						Back
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={navigation.next}
					>
						Next
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default Contact;
