import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

function About() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			backDelay: 2000,
			backSpeed: 70,
			strings: ["Developer", "Programmer", "Problem Solver"],
		});
	}, []);

	return (
		<div className="about" id="about">
			<div className="left">
				<div className="imageContainer">
					<img src="images/arjun12.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<Typography gutterBottom variant="h5" component="div">
						<h2>About</h2>
					</Typography>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="images/coder.png"
							alt="green iguana"
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								More than 2 years of IT industry experience. Tech savvy person,
								focusing more on learning latest technologies
							</Typography>
							<h3>
								JavaScript and React <span ref={textRef}></span>
							</h3>
						</CardContent>
					</Card>
				</div>
				<a href="#portfolio">
					<img src="images/arrow.jpeg" alt="" />
				</a>
			</div>
		</div>
	);
}

export default About;
