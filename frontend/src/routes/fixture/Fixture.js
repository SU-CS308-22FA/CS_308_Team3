import { useState } from "react";
import "./fixture.scss";
import { Button } from "@mui/material";

export default function Fixture() {
    const [matches, setMatchRoutes] = useState([
        {
            team1: "CORENDON ALANYASPOR",
            team2: "ADANA DEMİRSPOR A.Ş.",
            date: "11.11.2022 20:00",
            referee: "Ali Palabıyık",
        },
        {
            team1: "CORENDON ALANYASPOR",
            team2: "ADANA DEMİRSPOR A.Ş.",
            date: "11.11.2022 20:00",
            referee: "Ali Palabıyık",
        },
        {
            team1: "CORENDON ALANYASPOR",
            team2: "ADANA DEMİRSPOR A.Ş.",
            date: "11.11.2022 20:00",
            referee: "Ali Palabıyık",
        },
        {
            team1: "CORENDON ALANYASPOR",
            team2: "ADANA DEMİRSPOR A.Ş.",
            date: "11.11.2022 20:00",
            referee: "",
        },
    ]);

    return (
        <div className="fixture">
            <h3>Fixture of the Week</h3>
            <div className="wrapContainer">
                {matches.map(({ team1, team2, date, referee }, index) => {
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
                                <p>{date}</p>
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
                })}
            </div>
        </div>
    );
}
