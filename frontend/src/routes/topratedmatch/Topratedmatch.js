import { useEffect, useState, useRef, useMemo } from "react";
import "./Topratedmatch.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Topratedmatch() {
	const questions = useMemo(() => [
		]);

	return (
		<>
			<div className="FAQ">
				<div>
				<div class="container">
  <h2>Top Rated Matches</h2>
  <p>Most watched and rated matches:</p>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading"><b>Week 38</b></div>
	  <div class="panel-body">Fenerbahçe vs Galatasaray</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 37</b></div>
	  <div class="panel-body">Sivasspor vs Rizespor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 36</b></div>
	  <div class="panel-body">Kayserispor vs Konyaspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 35</b></div>
	  <div class="panel-body">Antalyaspor vs Fenerbahçe</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 34</b></div>
	  <div class="panel-body">Galatasaray vs Adana Demirspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 33</b></div>
	  <div class="panel-body">Alanyaspor vs Trabzonspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 32</b></div>
	  <div class="panel-body">Başakşehir vs Kasımpaşa</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 31</b></div>
	  <div class="panel-body">Adana Demirspor vs Fenerbahçe</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 30</b></div>
	  <div class="panel-body">Karagümrük vs Kayserispor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 29</b></div>
	  <div class="panel-body">Galatasaray vs Alanyaspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 28</b></div>
	  <div class="panel-body">Gaziantep FK vs Sivasspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 27</b></div>
	  <div class="panel-body">Fenerbahçe vs Kayserispor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 26</b></div>
	  <div class="panel-body">Alanyaspor vs ÜmraniyeSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 25</b></div>
	  <div class="panel-body">Gaziantep FK vs Beşiktaş</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 24</b></div>
	  <div class="panel-body">Fenerbahçe vs Gaziantep FK</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 23</b></div>
	  <div class="panel-body">Beşiktaş vs Adana Demirspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 22</b></div>
	  <div class="panel-body">Beşiktaş vs Trabzonspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 21</b></div>
	  <div class="panel-body">Trabzonspor vs Kayserispor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 20</b></div>
	  <div class="panel-body">Adana Demirspor vs Alanyaspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 19</b></div>
	  <div class="panel-body">Kayserispor vs Adana Demirspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 18</b></div>
	  <div class="panel-body">Alanyaspor vs Karagümrük</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 17</b></div>
	  <div class="panel-body">Gaziantep FK vs ÜmraniyeSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 16</b></div>
	  <div class="panel-body">Fenerbahçe vs Alanyaspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 15</b></div>
	  <div class="panel-body">ÜmraniyeSpor vs Adana Demirspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 14</b></div>
	  <div class="panel-body">AntalyaSpor vs ÜmraniyeSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 13</b></div>
	  <div class="panel-body">Gaziantep FK vs Alanyaspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 12</b></div>
	  <div class="panel-body">Fenerbahçe vs Karagümrük</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 11</b></div>
	  <div class="panel-body">ÜmraniyeSpor vs Galatasaray</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 10</b></div>
	  <div class="panel-body">Trabzonspor vs Galatasaray</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 9</b></div>
	  <div class="panel-body">Adana Demirspor vs ÜmraniyeSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 8</b></div>
	  <div class="panel-body">Fenerbahçe vs BursaSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 7</b></div>
	  <div class="panel-body">Alanyaspor vs Karagümrük</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 6</b></div>
	  <div class="panel-body">Gaziantep FK vs Adana Demirspor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 5</b></div>
	  <div class="panel-body">Beşiktaş vs BursaSpor</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 4</b></div>
	  <div class="panel-body">Galatasaray vs Gaziantep FK</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 3</b></div>
	  <div class="panel-body">BursaSpor vs Galatasaray</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 2</b></div>
	  <div class="panel-body">Trabzonspor vs Karagümrük</div>
	  <br></br>
	  <div class="panel-heading"><b>Week 1</b></div>
	  <div class="panel-body">Adana Demirspor vs Gaziantep FK</div>
	  <br></br>
      
    </div>
  </div></div>
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




