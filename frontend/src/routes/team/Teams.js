import { useEffect, useState } from "react";
import "./teams.scss";
import { Button } from "@mui/material";
import axios from "axios";

export default function Teams() {
    const [teams, setTeams] = useState();

    useEffect(() => {
        axios
            .get("/teams/teamsList")
            .then((res) => {
                setTeams(res.data.teams);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="fixture">
            <h3>Fixture of the Week</h3>
            <div className="wrapContainer">
                {teams &&
                    teams.map(
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
                                            width: "19vh",
                                            height: "auto",
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
