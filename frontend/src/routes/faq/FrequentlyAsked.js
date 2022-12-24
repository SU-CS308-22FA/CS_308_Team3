import { useEffect, useState, useRef, useMemo } from "react";
import "./FrequentlyAsked.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FrequentlyAsked() {
	const questions = useMemo(() => [
		{
			question: "How can I create an account?", answer: <>
				You can press the profile button on the navigation bar or you can click the profile icon which is near search button. Then you should enter your personel information;<br />
				1. Name<br />
				2. Surname<br />
				3. Age<br />
				4. E-mail<br />
				5. Password<br />
				6. Team Supported "(Optional)"<br />
				7. Profile Picture "(Optional)"<br />
				8. Create Account Button</>
		},
		{
			question: "How can I edit my profile?", answer: <>1. You have to click on the "Profile" button on navigation bar or profile icon which is near search button.<br />
				2. You can chanye your informations easily just by entering them.<br />
				3. You should press update my profile button at the down left of the page.</>
		},
		{
			question: "How can I see the detailed information of matches?", answer: <>1. Press to the fixtures tab at navigation bar.<br />
				2. Press on the match that you want to see the detailed information.</>
		},
		{
			question: "How can I see the future matches?", answer: <>1. Press to the fixtures tab at navigation bar.<br />
				2. At the top of matches there is arrows. You should press to the right arrow for wieving the future matches.</>
		},
		{
			question: "How can I see team details?", answer: <>1. Press to the "Teams" button at navigation bar.<br />
				2. Press on the team that you want to see the detailed information. <br />
				--------------------------------------------------------------------------------- <br />
				1. You can easily press the team's image at the top of navigation bar.</>
		},
		{ question: "How can I see frequently asked questions?", answer: <>1. Press to the "FAQ" button at navigation bar.<br /></> },
		{
			question: "How can I see the answer of frequently asked questions?", answer: <>1. Press to the "FAQ" button at navigation bar.<br />
				2. Click on a question the anser will be seen under the question.</>
		},
		{ question: "How is the voting system working?", answer: <>There are two types of users, TFF or normal user, each TFF user's vote is equal to 10 normal user's vote.</> },
		{ question: "Can I be a TFF user?", answer: <>Unfortunately no. However, maybe one day, if you work with TFF you can be :).</> },
		{ question: "Can I vote without signing in?", answer: <>No, you have to sign in to system for giving vote.</> },
	]);

	return (
		<>
			<div className="FAQ">
				<div>
					{questions.map(({ question, answer }, index) => (
						<Accordion key={index.toString()}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography>Q{index + 1}-) {question}</Typography>
							</AccordionSummary>

							<AccordionDetails><Typography>{answer}</Typography></AccordionDetails>
						</Accordion>
					))}
				</div>
				<br></br>
				<br></br>
				<footer>
      			<p><b>Turkish Football Federation 2022.</b></p>
				<p>Services</p>
				  <p><a href="/">Fixture</a></p>
				  <p><a href="/referees">Referees</a></p>
				  <p><a href="/teams">Teams</a></p>
				  <p><a href="/profile">Profile</a></p>
				  <p><a href="/faq">FAQ</a></p>
				  <p><a href="/topratedreferee">Top Rated Referee</a></p>
				  <p><a href="/topratedmatch">Top Rated Match</a></p>
    			</footer>
			</div>
		</>
	);
}




