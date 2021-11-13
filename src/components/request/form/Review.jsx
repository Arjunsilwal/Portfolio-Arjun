import {
	Button,
	Container,
	Accordion,
	AccordionSummary,
	ListItemText,
	AccordionDetails,
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Review({ formData, navigation }) {
	const style = {
		backgroundColor: "white",
	};
	const { firstName, lastName, address, city, state, postCode, phone, email } =
		formData;
	const { go } = navigation;
	return (
		<div style={style}>
			<Container maxWidth="sm">
				<h3>Review</h3>
				<RenderAccordion
					summary="Name"
					go={go}
					details={[{ "First Name": firstName }, { "Last Name": lastName }]}
				/>
				<RenderAccordion
					summary="Address"
					go={go}
					details={[
						{ Address: address },
						{ City: city },
						{ State: state },
						{ PostCode: postCode },
					]}
				/>
				<RenderAccordion
					summary="Contact"
					go={go}
					details={[{ Phone: phone }, { Email: email }]}
				/>
				<Button
					color="primary"
					variant="contained"
					style={{ marginTop: "1.5rem" }}
					onClick={navigation.next}
				>
					Submit
				</Button>
			</Container>
		</div>
	);
}
export const RenderAccordion = ({ summary, details, go }) => (
	<Accordion>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}>
			{summary}
		</AccordionSummary>

		<AccordionDetails>
			<div>
				{details.map((data, index) => {
					const objKey = Object.keys(data)[0];
					const objValue = data[objKey];
					return (
						<ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
					);
				})}
				<IconButton
					color="primary"
					onClick={() => go(`${summary.toLowerCase()}`)}
				>
					<EditIcon />
				</IconButton>
			</div>
		</AccordionDetails>
	</Accordion>
);

export default Review;
