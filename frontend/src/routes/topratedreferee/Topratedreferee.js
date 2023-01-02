import { useEffect, useState, useRef, useMemo } from "react";
import "./Topratedreferee.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Topratedreferee() {
	const questions = useMemo(() => [
		
			]);

	return (
		<>
			<div className="FAQ">
				
				<div>
				<div class="container">
  <h2>Top Rated Referee For Season</h2>
  <p>The most liked and scored referee during the season.</p>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading"><b>Referee</b></div>
	  <br></br>
	  <div class="panel-heading"><b>#1</b></div>
      <div class="panel-body">Mete Kalkavan&emsp;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
	  <br></br>
	  <div class="panel-heading"><b>#2</b></div>  
      <div class="panel-body">Arda Kardeşler&emsp;&#9733;&#9733;&#9733;&#9733;&#9734;</div>
	  <br></br>
	  <div class="panel-heading"><b>#3</b></div>
      <div class="panel-body">Yaşar Kemal&emsp;&#9733;&#9733;&#9733;&#9734;&#9734;</div>
	  <br></br>
	  <div class="panel-heading"><b>#4</b></div>
      <div class="panel-body">Bahattin Şimşek&emsp;&#9733;&#9733;&#9734;&#9734;&#9734;</div>
	  <br></br>
	  <div class="panel-heading"><b>#5</b></div>
      <div class="panel-body">Zorbay Küçük&emsp;&#9733;&#9734;&#9734;&#9734;&#9734;</div>
	  
    </div>
  </div>
</div>
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
			</div>
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
				  <p><a href="/sitemap.xml" target="_blank">Sitemap</a></p>
    			</footer>
		</>
	);
}




