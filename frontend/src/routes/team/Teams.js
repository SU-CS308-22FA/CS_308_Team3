import { useEffect, useState } from "react";
import "./teams.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Teams() {
    const [teams, setTeams] = useState();
    const navigate = useNavigate();

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
            <h3>Teams</h3>
            <div className="wrapContainer">
                {teams &&
                    teams.map(
                        ({ name, manager, anthem, alt, numPlayers }, index) => {
                            return (
                                <div
                                    className="team"
                                    key={index}
                                    onClick={() => {
                                        navigate(`/teams/${index}`);
                                    }}
                                >
                                    <img
                                        src={anthem}
                                        alt={alt}
                                        style={{
                                            height: "20vh",
                                            width: "auto",
                                            marginBottom: "2vh",
                                        }}
                                    />
                                    <p>Team manager: {manager}</p>
                                    <p>Team Size: {numPlayers}</p>
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}
