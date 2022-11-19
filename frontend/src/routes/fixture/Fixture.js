import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sortList } from "../../functions/helpers";

import "./fixture.scss";

export default function Fixture() {
    const [matches, setMatches] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/fixture/list")
            .then((res) => {
                const matchesWoOrder = res.data.matches;
                // console.table(matchesWoOrder);
                const sortedMathces = sortList(matchesWoOrder);
                setMatches(sortedMathces);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="fixture">
            <h3>Fixture of the Week</h3>
            <div className="wrapContainer">
                {matches &&
                    matches.map(
                        (
                            { id, team1, logo1, team2, logo2, date, referee },
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
                                        <p>{team1}</p>
                                        <img
                                            className="fixtureTeamLogo"
                                            src={logo1}
                                            alt={team1}
                                        />
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                margin: "0vw 0.8vw",
                                            }}
                                        >
                                            {date}
                                        </p>
                                        <img
                                            className="fixtureTeamLogo"
                                            src={logo2}
                                            alt={team2}
                                        />
                                        <p>{team2}</p>
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
            </div>
        </div>
    );
}
