import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { sortList } from "../../functions/helpers";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import "./fixture.scss";

export default function Fixture() {
    const [matches, setMatches] = useState();
    const [week, setWeek] = useState(1);

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
                                { team1, logo1, team2, logo2, date, referee },
                                index
                            ) => {
                                return (
                                    <div
                                        className="match"
                                        key={index}
                                        onClick={() => {
                                            console.log("asd"); //TODO go to match
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
                </div>
            </div>
        </div>
    );
}
