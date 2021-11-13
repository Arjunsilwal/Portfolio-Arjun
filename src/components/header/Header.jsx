import { Mail, Person } from "@material-ui/icons";
import React from "react";
import "./header.scss";

const Header = (props) => {
	return (
		<div className={"header " + (props.appActive && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#about" className="logo">
						Arjun Silwal
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+61-0450656841</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>
							<a href="mailto:asilwal222@gmail.com?">asilwal222@gmail.com</a>
						</span>
					</div>
				</div>
				<div className="right">
					<div
						className="hamburger"
						onClick={() => props.setAppActive(!props.appActive)}
					>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
