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

    const removeTeam = async () => {
        console.log("asdasfdc");
        await axios
            .post("/teams/removeTeam", user.mail)
            .then((res) => {
                const message = res.data;
                if (message === "Team is removed")
                    setalert({
                        message: "Team is removed from the league",
                        severity: "success",
                    });
                else
                    setalert({
                        message: "Team could not be removed from the system",
                    });
            })
            .catch((err) => console.error(err));
    };

    // const addNewTeam = async () => {
    //     await axios
    //         .post("/teams/addTeam", user.mail)
    //         .then((res) => {
    //             const { message, newTeam } = res.data;
    //             if (message === "Team is added") {
    //                 setTeams((oldTeams) => {
    //                     oldTeams.push(newTeam);
    //                     return [...oldTeams];
    //                 });
    //                 setalert({
    //                     message: "Team is added to the league",
    //                     severity: "success",
    //                 });
    //             } else
    //                 setalert({ message: "Team could not be added to system" });
    //         })
    //         .catch((err) => console.error(err));
    // };

    const goToTeamAdd = () => {
        navigate("/add-team");
    };

    return (
        <div className="fixture">
            <h3>Teams</h3>
            {user.userType === "TFF" && (
                <Button id="addTeamBtn" onClick={goToTeamAdd}>
                    Add a new team
                </Button>
            )}
            <div className="wrapContainer">
                {teams &&
                    teams.map(
                        ({ name, manager, anthem, alt, numPlayers }, index) => {
                            return (
                                <div className="teamWButton">
                                    <img
                                        src={cancelIcon}
                                        id="cancelButton"
                                        alt="cancel"
                                        key={index}
                                        onClick={removeTeam}
                                    />
                                    <div
                                        className="team"
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
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}
