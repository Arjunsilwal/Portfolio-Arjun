import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
	featuredImage,
	microsoftImage,
	pythonImage,
	javaScriptImage,
	javaImage,
} from "../../data";

function Portfolio() {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "microsoft",
			title: "Microsoft",
		},
		{
			id: "python",
			title: "Python",
		},
		{
			id: "java",
			title: "Java",
		},
		{
			id: "javaScript",
			title: "Javascript and React",
		},
	];
	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredImage);
				break;
			case "microsoft":
				setData(microsoftImage);
				break;
			case "python":
				setData(pythonImage);
				break;
			case "java":
				setData(javaImage);
				break;
			case "javaScript":
				setData(javaScriptImage);
				break;
			default:
				setData(featuredImage);
				break;
		}
	}, [selected]);
	return (
		<div className="portfolio" id="portfolio">
			<h1>Certificates</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div className="item">
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
