import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
//import Testimonials from "./components/testimonials/Testimonials";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Request from "./components/request/Request";

function App() {
	const [appActive, setAppActive] = useState(false);
	return (
		<div className="app">
			<Header appActive={appActive} setAppActive={setAppActive} />
			<Menu appActive={appActive} setAppActive={setAppActive} />
			<div className="sections">
				<About />
				<Portfolio />
				<Experience />
				<Request />
				<Contact />
			</div>
		</div>
	);
}

export default App;
