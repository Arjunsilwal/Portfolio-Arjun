import { useStep, useForm } from "react-hooks-helper";
import Name from "./form/Name";
import Address from "./form/Address";
import Contact from "./form/Contact";
import Review from "./form/Review";
import "./request.scss";

const defaultData = {
	firstName: "",
	lastName: "",
	addres: "",
	city: "",
	state: "",
	postCode: "",
	phone: "",
	email: "",
};

const steps = [
	{ id: "name" },
	{ id: "address" },
	{ id: "contact" },
	{ id: "review" },
];
function Request() {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});
	const props = { formData, setForm, navigation };

	switch (step.id) {
		case "name":
			return <Name {...props} />;
		case "address":
			return <Address {...props} />;
		case "contact":
			return <Contact {...props} />;
		case "review":
			return <Review {...props} />;
		default:
			return <Name {...props} />;
	}
}

export default Request;
