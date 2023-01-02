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

    /**
     * This function removes a team from the system by its name
     * @param {String} teamName Name of the team to be removed
     */
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
                } // If authentication fails or an error happens
                else
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
                                            navigate(`/teams/${name}`);
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
            <footer>
      			<p><b>Turkish Football Federation 2022.</b></p>
				<p>Services</p>
				  <p><a href="/">Fixture</a></p>
				  <p><a href="/referees">Referees</a></p>
				  <p><a href="/teams">Teams</a></p>
				  <p><a href="/profile">Profile</a></p>
				  <p><a href="/faq">FAQ</a></p>
				  <p><a href="/topratedreferee">Top Rated Referee</a></p>
				  <p><a href="/topratedmatch">Top Rated Match</a></p>
				  <p><a href="/sitemap.xml" target="_blank">Sitemap</a></p>
    			</footer>
        </div>
        
    );
}
