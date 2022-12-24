import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sortDates } from "../../functions/helpers";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import "./fixture.scss";

export default function Fixture() {
    const [matches, setMatches] = useState(null);
    const [week, setWeek] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/fixture/list")
            .then((res) => {
                const matchesWoOrder = res.data.matches;
                // console.table(matchesWoOrder);
                const sortedMathces = sortDates(matchesWoOrder);
                setMatches(sortedMathces);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h3>Fixture of the Week</h3>
            <h3 style={{ color: "red" }}>Week {week}</h3>
            <div className="fixture">
                <div className="weekChanger">
                    <ArrowCircleLeftIcon
                        onClick={() =>
                            week > 1 ? setWeek((week) => week - 1) : null
                        }
                        style={{ height: "35px", width: "auto" }}
                    />
                    <p style={{ margin: "0px 10px", fontSize: "22px" }}>
                        {week}/38
                    </p>
                    <ArrowCircleRightIcon
                        onClick={() =>
                            week < 38 ? setWeek((week) => week + 1) : null
                        }
                        style={{ height: "35px", width: "auto" }}
                    />
                </div>
                <div className="wrapContainer">
                    {matches &&
                        matches.map(
                            (
                                {
                                    id,
                                    team1,
                                    logo1,
                                    team2,
                                    logo2,
                                    date,
                                    referee,
                                },
                                index
                            ) => {
                                return (
                                    <div
                                        className="match"
                                        key={index}
                                        onClick={() => {
                                            navigate(`/match-details/${id}`); //TODO go to match
                                        }}
                                    >
                                        <div className="matchInfo">
                                            <p style={{ flex: "1" }}>{team1}</p>
                                            <img
                                                className="fixtureTeamLogo"
                                                src={logo1}
                                                alt={team1}
                                                style={{ flex: "1" }}
                                            />
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    margin: "0vw 0.8vw",
                                                    flex: "1",
                                                }}
                                            >
                                                {date}
                                            </p>
                                            <img
                                                className="fixtureTeamLogo"
                                                src={logo2}
                                                alt={team2}
                                                style={{ flex: "1" }}
                                            />
                                            <p style={{ flex: "1" }}>{team2}</p>
                                        </div>
                                        <div className="referee">
                                            {referee === "" ? (
                                                <Button
                                                    color="primary"
                                                    variant="outlined"
                                                    size="medium"
                                                    className="button"
                                                >
                                                    Assign a referee
                                                </Button>
                                            ) : (
                                                <p style={{ fontSize: 18 }}>
                                                    Referee: {referee}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    {matches === null && <h3>Loading...</h3>}
                </div>
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
    );
}
