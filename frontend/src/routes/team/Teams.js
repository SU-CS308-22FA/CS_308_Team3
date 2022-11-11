import { useState } from "react";
import "./teams.scss";
import { Button } from "@mui/material";

export default function Teams() {
    const [teams, setTeams] = useState([
        {
            name: "Fenerbahçe",
            coach: "Jorge Jesus",
            numPlayers: 22,
            anthem: require("../../assets/fenerbahce.png"),
            alt: "asd",
        },
        {
            name: "Fenerbahçe",
            coach: "Jorge Jesus",
            numPlayers: 22,
            anthem: require("../../assets/fenerbahce.png"),
            alt: "asd",
        },
        {
            name: "Fenerbahçe",
            coach: "Jorge Jesus",
            numPlayers: 22,
            anthem: require("../../assets/fenerbahce.png"),
            alt: "asd",
        },
        {
            name: "Fenerbahçe",
            coach: "Jorge Jesus",
            numPlayers: 22,
            anthem: require("../../assets/fenerbahce.png"),
            alt: "asd",
        },
    ]);

    return (
        <div className="fixture">
            <h3>Fixture of the Week</h3>
            <div className="wrapContainer">
                {teams.map(
                    ({ name, coach, anthem, alt, numPlayers }, index) => {
                        return (
                            <div
                                className="team"
                                key={index}
                                onClick={() => {
                                    console.log("asd"); //TODO go to match
                                }}
                            >
                                <img
                                    src={anthem}
                                    alt={alt}
                                    style={{
                                        width: "20vh",
                                        height: "20vh",
                                        marginBottom: "2vh",
                                    }}
                                />
                                <p>Team manager: {coach}</p>
                                <p>Team Size: {numPlayers}</p>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}
