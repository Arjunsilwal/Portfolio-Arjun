import React from "react";
import "./menu.scss";

const Menu = (props) => {
	return (
		<div className={"menu " + (props.appActive && "active")}>
			<ul>
				<li onClick={() => props.setAppActive(false)}>
					<a href="#about">About</a>
				</li>
				<li onClick={() => props.setAppActive(false)}>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li onClick={() => props.setAppActive(false)}>
					<a href="#experience">Experience</a>
				</li>
				<li onClick={() => props.setAppActive(false)}>
					<a href="#request">Request</a>
				</li>
				<li onClick={() => props.setAppActive(false)}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
