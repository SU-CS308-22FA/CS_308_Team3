import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { NotificationContext } from "../../contexts/notificationContext";
import { Button } from "@mui/material";

import "./teams.scss";

const cancelIcon = require("../../assets/cancel.png");

export default function Teams() {
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);
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

    const removeTeam = async (teamName) => {
        await axios
            .post("/teams/removeTeam/" + teamName, { user })
            .then((res) => {
                const { message } = res.data;
                console.log(message);
                if (message === "Team is removed") {
                    setTeams((oldTeams) => {
                        const newTeams = oldTeams.filter(
                            (team) => team.name !== teamName
                        );
                        return [...newTeams];
                    });
                    setalert({
                        message: "Team is removed from the league",
                        severity: "success",
                    });
                } else
                    setalert({
                        message: "Team could not be removed from the system",
                    });
            })
            .catch((err) => console.error(err));
    };

    const goToTeamAdd = () => {
        navigate("/add-team");
    };

    return (
        <div className="fixture">
            <h3>Teams</h3>
            {user?.userType === "TFF" && (
                <Button id="addTeamBtn" onClick={goToTeamAdd}>
                    Add a new team
                </Button>
            )}
            <div className="wrapContainer">
                {teams &&
                    teams.map(
                        ({ name, manager, image, alt, trophies }, index) => {
                            return (
                                <div className="teamWButton">
                                    {user?.userType === "TFF" && (
                                        <img
                                            src={cancelIcon}
                                            id="cancelButton"
                                            alt="cancel"
                                            key={index}
                                            onClick={() => removeTeam(name)}
                                        />
                                    )}
                                    <div
                                        className="team"
                                        onClick={() => {
                                            navigate(`/teams/${index}`);
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={alt}
                                            style={{
                                                height: "20vh",
                                                width: "auto",
                                                marginBottom: "2vh",
                                            }}
                                        />
                                        <p>Team manager: {manager}</p>
                                        <p>Trophies: {trophies}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}
