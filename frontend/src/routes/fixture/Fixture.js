import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sortDates } from "../../functions/helpers";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import "./fixture.scss";
import { UserContext } from "../../contexts/userContext";

export default function Fixture() {
    const { user } = useContext(UserContext);
    const [matches, setMatches] = useState(null);
    const [week, setWeek] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/match/" + week)
            .then((res) => {
                const matchesWoOrder = res.data.matches;
                // setMatches(matchesWoOrder);
                // console.table(matchesWoOrder);
                const sortedMathces = sortDates(matchesWoOrder);
                setMatches(sortedMathces);
            })
            .finally(() => setIsLoading(false))
            .catch((err) => console.log(err));
    }, [week]);

    const goToAddMatch = () => {
        navigate("add-match");
    };

    const goNextWeek = () => {
        week < 38 && setWeek((week) => week + 1);
    };

    const goPrevWeek = () => {
        week > 1 && setWeek((week) => week - 1);
    };

    return (
        <div>
            <h3>Fixture of the Week</h3>
            <div className="row" style={{ justifyContent: "space-between" }}>
                <h3 style={{ color: "red" }}>Week {week}</h3>
                {user?.userType === "TFF" && (
                    <Button
                        color="primary"
                        variant="outlined"
                        size="medium"
                        className="button"
                        onClick={goToAddMatch}
                    >
                        Add a match
                    </Button>
                )}
            </div>
            <div className="fixture">
                <div className="weekChanger">
                    <ArrowCircleLeftIcon
                        onClick={goPrevWeek}
                        style={{ height: "35px", width: "auto" }}
                    />
                    <p style={{ margin: "0px 10px", fontSize: "22px" }}>
                        {week}/38
                    </p>
                    <ArrowCircleRightIcon
                        onClick={goNextWeek}
                        style={{ height: "35px", width: "auto" }}
                    />
                </div>
                <div className="wrapContainer">
                    {matches &&
                        !isLoading &&
                        matches.map(
                            (
                                {
                                    _id,
                                    team1,
                                    logo1,
                                    team2,
                                    logo2,
                                    date,
                                    time,
                                    referee,
                                },
                                index
                            ) => {
                                return (
                                    <div
                                        className="match"
                                        key={index}
                                        onClick={() => {
                                            navigate(`/match-details/${_id}`);
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
                                            <div id="datetime">
                                                <p
                                                    style={{
                                                        fontWeight: "bold",
                                                        margin: "0vw 0.8vw",
                                                        flex: "1",
                                                    }}
                                                >
                                                    {date}
                                                </p>
                                                <p
                                                    style={{
                                                        fontWeight: "bold",
                                                        margin: "0vw 0.8vw",
                                                        flex: "1",
                                                    }}
                                                >
                                                    {time}
                                                </p>
                                            </div>
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
                                                user?.userType === "TFF" ? (
                                                    <Button
                                                        color="primary"
                                                        variant="outlined"
                                                        size="medium"
                                                        className="button"
                                                    >
                                                        Assign a referee
                                                    </Button>
                                                ) : (
                                                    <p>No referee assigned</p>
                                                )
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
                    {(matches === null || isLoading) && <h3>Loading...</h3>}
                </div>
            </div>
        </div>
    );
}
