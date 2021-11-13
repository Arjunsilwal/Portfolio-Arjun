import { Button, Container, TextField } from "@material-ui/core";

function Name({ formData, navigation, setForm }) {
	const style = {
		backgroundColor: "white",
	};
	const { firstName, lastName } = formData;
	return (
		<div style={style} id="request">
			<Container maxWidth="xs">
				<h2>Request here for more Info</h2>
				<TextField
					label="First Name"
					name="firstName"
					value={firstName}
					onChange={setForm}
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					required
				/>
				<TextField
					label="Last Name"
					name="lastName"
					value={lastName}
					onChange={setForm}
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					required
				/>
				<Button
					variant="contained"
					fullWidth
					color="primary"
					style={{ marginTop: "1rem" }}
					onClick={navigation.next}
				>
					Next
				</Button>
			</Container>
		</div>
	);
}

export default Name;
