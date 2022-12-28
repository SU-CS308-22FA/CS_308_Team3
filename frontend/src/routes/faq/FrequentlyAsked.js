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




