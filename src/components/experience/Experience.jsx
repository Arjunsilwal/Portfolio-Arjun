import {
	Button,
	Card,
	CardActions,
	Container,
	Grid,
	Paper,
	styled,
	Typography,
} from "@material-ui/core";
import "./experience.scss";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Experience() {
	return (
		<div className="experience" id="experience">
			<h1>Experience</h1>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Item>
							<Card sx={{ minWidth: 275 }}>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Intern May 2021- Present
								</Typography>
								<Typography variant="h5" component="div">
									WebVine Australia
								</Typography>
								<Typography variant="body2">
									- Helped to fix bug associated with CSS and HTML
									<br />- developed hands on experience on functional
									programming
									<br />
									- worked on dotnet and microsoft power platform
									<br />
								</Typography>
								<CardActions>
									<Button
										size="small"
										href="https://www.linkedin.com/company/webvine/"
									>
										Visit the webvine and get info here
									</Button>
								</CardActions>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<Card>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Junior dot net developer JUl 2018- Jan 2019
								</Typography>
								<Typography variant="h5" component="div">
									Uranus Tech Nepal
								</Typography>
								<Typography variant="body2">
									- Handling Clint Request
									<br />
									- Worked on dot net mvc and sql programming
									<br />
									- changed stored procedure and data display according to
									client request
									<br />
								</Typography>
								<CardActions>
									<Button
										size="small"
										href="https://www.linkedin.com/company/uranus-tech-nepal-pvt--ltd-/"
									>
										Visit Uranus tech Info here
									</Button>
								</CardActions>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<Card>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									IT Help desk support 2017- 2018
								</Typography>
								<Typography variant="h5" component="div">
									R.K Auto Center Nepal
								</Typography>
								<Typography variant="body2">
									- Handling all the IT related stuff in the office
									<br />
									- Handling incoming Email, microsoft office and software
									installation
									<br />
								</Typography>
								<CardActions>
									<Button>Not updated on linkdin</Button>
								</CardActions>
							</Card>
						</Item>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Experience;
