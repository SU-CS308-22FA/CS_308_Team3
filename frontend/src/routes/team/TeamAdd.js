import { Button, TextField } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import { NotificationContext } from "../../contexts/notificationContext";

import "./teams.scss";

export default function TeamAdd() {
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [name, setName] = useState("");
    const [shortName, setShortName] = useState("");
    const [manager, setManager] = useState("");
    const [trophies, setTrophies] = useState("");
    const [fans, setFans] = useState("");
    const [yearEst, setYearEst] = useState("");
    const [image, setImage] = useState("");

    const [player, setPlayer] = useState("");
    const [players, setPlayers] = useState([]);

    const FIELDS = useMemo(
        () => [
            { field: "Name", type: "text", value: name, func: setName },
            {
                field: "Short Name of Team",
                type: "text",
                value: shortName,
                func: setShortName,
            },
            {
                field: "Manager",
                type: "text",
                value: manager,
                func: setManager,
            },
            {
                field: "Number of Trophies",
                type: "text",
                value: trophies,
                func: setTrophies,
            },
            {
                field: "Number of Fans",
                type: "text",
                value: fans,
                func: setFans,
            },
            {
                field: "Year of Establishment",
                type: "text",
                value: yearEst,
                func: setYearEst,
            },
            {
                field: "Anthem of Team URL",
                type: "text",
                value: image,
                func: setImage,
            },
        ],
        [name, shortName, manager, trophies, fans, yearEst, image]
    );

    /**
     * Send the new team information to backend
     *
     */
    const addTeam = async () => {
        // Check if any of the fields are empty
        if (
            name === "" ||
            manager === "" ||
            shortName === "" ||
            trophies === "" ||
            fans === "" ||
            yearEst === ""
        ) {
            setalert({
                message: "You cannot leave any of the fields empty!",
            });
            return;
        }

        // Send request to add the new team on the list
        await axios
            .post("/teams/addTeam", {
                team: {
                    name,
                    shortName,
                    manager,
                    trophies,
                    fans,
                    yearEst,
                    image,
                    players,
                },
            })
            .then((res) => {
                // console.log(res.data);
                const { message, team } = res.data;
                if (message === "Team is added") {
                    setalert({
                        message: "Team is added to the system succesfully",
                        severity: "success",
                    });
                } else {
                    setalert({
                        message: message,
                        severity: "error",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * To add a player to team's players list
     * @param {object} player The player to be added to players list
     */
    const addPlayer = (player) => {
        setPlayers((oldPlayers) => [...oldPlayers, player]);
        setPlayer("");
    };

    return (
        <div className="teamAdd">
            <div style={{ flexDirection: "column" }}>
                <h3>New Referee Details</h3>
                <div className="textForm">
                    <div className="textFieldGroup">
                        {FIELDS.map(({ field, type, value, func }) => {
                            return (
                                <div className="textField" key={field}>
                                    <p className="text">{field}</p>
                                    <TextField
                                        style={{ width: "20vw" }}
                                        label={field}
                                        type={type}
                                        value={value}
                                        onChange={(event) =>
                                            func(event.target.value)
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Button
                    onClick={addTeam}
                    style={{ marginTop: "1vh", marginBottom: "3vh" }}
                >
                    Submit New Team
                </Button>
            </div>
            <div
                style={{
                    paddingLeft: "16vh",
                }}
            >
                <h3>Adding Players</h3>
                <div
                    style={{
                        paddingTop: "5vh",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        style={{ width: "15vw" }}
                        label={"Player"}
                        type={"text"}
                        value={player}
                        onChange={(event) => setPlayer(event.target.value)}
                    />
                    <Button onClick={() => addPlayer(player)}>
                        Add Player
                    </Button>
                </div>
                <div style={{ marginTop: "4vh" }}>
                    {players !== [] &&
                        players.map((player, index) => (
                            <p>
                                {index + 1}-) {player}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
}
