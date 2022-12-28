import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NotificationContext } from "../../contexts/notificationContext";
import { UserContext } from "../../contexts/userContext";

import "./FrequentlyAsked.scss";

export default function FrequentlyAsked() {
	const { user } = useContext(UserContext);
	const { setalert } = useContext(NotificationContext);

	const [questions, setQuestions] = useState([]);
	const [newQuestion, setNewQuestion] = useState('');
	const [newAnswer, setNewAnswer] = useState('');

	useEffect(() => {
		axios
			.get("/faq/list")
			.then((res) => {
				setQuestions(res.data.faq);
				console.log(res.data.faq);
			})
			.catch((err) => console.log(err));
	}, []);
	// const [questions, setQuestions] = useState([
	// 	{
	// 		question: "How can I create an account?", answer: <>
	// 			You can press the profile button on the navigation bar or you can click the profile icon which is near search button. Then you should enter your personel information;<br />
	// 			1. Name<br />
	// 			2. Surname<br />
	// 			3. Age<br />
	// 			4. E-mail<br />
	// 			5. Password<br />
	// 			6. Team Supported "(Optional)"<br />
	// 			7. Profile Picture "(Optional)"<br />
	// 			8. Create Account Button</>
	// 	},
	// 	{
	// 		question: "How can I edit my profile?", answer: <>1. You have to click on the "Profile" button on navigation bar or profile icon which is near search button.<br />
	// 			2. You can chanye your informations easily just by entering them.<br />
	// 			3. You should press update my profile button at the down left of the page.</>
	// 	},
	// 	{
	// 		question: "How can I see the detailed information of matches?", answer: <>1. Press to the fixtures tab at navigation bar.<br />
	// 			2. Press on the match that you want to see the detailed information.</>
	// 	},
	// 	{
	// 		question: "How can I see the future matches?", answer: <>1. Press to the fixtures tab at navigation bar.<br />
	// 			2. At the top of matches there is arrows. You should press to the right arrow for wieving the future matches.</>
	// 	},
	// 	{
	// 		question: "How can I see team details?", answer: <>1. Press to the "Teams" button at navigation bar.<br />
	// 			2. Press on the team that you want to see the detailed information. <br />
	// 			--------------------------------------------------------------------------------- <br />
	// 			1. You can easily press the team's image at the top of navigation bar.</>
	// 	},
	// 	{ question: "How can I see frequently asked questions?", answer: <>1. Press to the "FAQ" button at navigation bar.<br /></> },
	// 	{
	// 		question: "How can I see the answer of frequently asked questions?", answer: <>1. Press to the "FAQ" button at navigation bar.<br />
	// 			2. Click on a question the anser will be seen under the question.</>
	// 	},
	// 	{ question: "How is the voting system working?", answer: <>There are two types of users, TFF or normal user, each TFF user's vote is equal to 10 normal user's vote.</> },
	// 	{ question: "Can I be a TFF user?", answer: <>Unfortunately no. However, maybe one day, if you work with TFF you can be :).</> },
	// 	{ question: "Can I vote without signing in?", answer: <>No, you have to sign in to system for giving vote.</> },

	// ]);

	const addQuestion = async (question, answer) => {
		setQuestions([
			...questions,
			{
				question: question,
				answer: answer
			}
		]);
		await axios
			.post("/faq/faqAdd", {
				question: question,
				answer: answer,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data.message === "FAQ add is succesful") {
					setalert({
						message: "FAQ add is succesful",
						severity: "success",
					});
				} else {
					setalert({
						message: res.data.message,
						severity: "error",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		addQuestion(newQuestion, newAnswer);
		setNewQuestion('');
		setNewAnswer('');
	};

	const deleteFAQ = (id) => {
		axios.post("/faq/faqDelete/" + id, { user }).then((res) => {
			const { message } = res.data;
			console.log(message);
			if (message === "FAQ is removed") {
				setQuestions((oldQuestions) => {
					const newQuestions = oldQuestions.filter(
						(question) => question._id !== id
					);
					return [...newQuestions];
				});
				setalert({
					message: "FAQ is removed from the system",
					severity: "success",
				});
			} // If authentication fails or an error happens
			else
				setalert({
					message: "FAQ could not be removed from the system",
				});
		}).catch((err) => {
			setalert({ message: "Could not delete question" })
			console.error(err);
		})
	};

	return (
		<>
			{user?.userType === "TFF" && (
				<div>
					<form onSubmit={handleSubmit}>
						<div style={{ marginBottom: "2vh" }}>
							<label >
								Question:
								<input type="text" value={newQuestion} style={{ margin: "0vh" }} onChange={e => setNewQuestion(e.target.value)} />
							</label>
						</div>
						<br />
						<div style={{ marginBottom: "2vh" }} >
							<label>
								Answer:
								<textarea value={newAnswer} style={{ resize: "none", width: "500px", height: "20px" }} onChange={e => setNewAnswer(e.target.value)} />
							</label>
						</div>
						<br />
						<button type="submit" style={{ marginBottom: "2vh" }}>Add Question</button>
					</form>
				</div>
			)}
			<div className="FAQ">
				{questions && questions.map(({ question, answer, _id }, index) => (
					<div className="questionWbtn" key={index.toString()}>
						<div className="question">
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header">
									<Typography>Q{index + 1}-) {question}</Typography>
								</AccordionSummary>
								<AccordionDetails><Typography>{answer}</Typography></AccordionDetails>
							</Accordion>
						</div>
						{user?.userType === "TFF" &&
							<button className="deletebtn" onClick={() => deleteFAQ(_id)}>X</button>}
					</div>
				))}
			</div>
		</>
	);
}




