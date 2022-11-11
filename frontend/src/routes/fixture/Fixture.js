import { useEffect, useState } from "react";
import "./fixture.scss";
import { Button } from "@mui/material";
import axios from "axios";

export default function Fixture() {
    const [matches, setMatches] = useState();

    useEffect(() => {
        axios
            .get("/fixture/list")
            .then((res) => {
                console.log(res.data.matches);
                setMatches(res.data.matches);
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
