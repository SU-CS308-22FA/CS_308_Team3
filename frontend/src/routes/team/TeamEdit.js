import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { NotificationContext } from "../../contexts/notificationContext";
import { UserContext } from "../../contexts/userContext";

import "./teams.scss";

export default function TeamEdit() {
    const { setalert } = useContext(NotificationContext);
    const { user } = useContext(UserContext);

    const [team, setTeam] = useState();

    const [manager, setManager] = useState("");
    const [yearEst, setYearEst] = useState("");
    const [trophies, setTrophies] = useState("");
    const [fans, setFans] = useState("");
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState(""); // For adding new players

    var team_id = useParams().id;

    useEffect(() => {
        const getTeam = async () => {
            await axios
                .get("/teams/" + team_id)
                .then((res) => {
                    console.log(res.data.team);
                    setTeam(res.data.team);
                    setManager(res.data.team.manager);
                    setYearEst(res.data.team.yearEst);
                    setTrophies(res.data.team.trophies);
                    setFans(res.data.team.fans);
                    setPlayers(res.data.team.players);
                })
                .catch((err) => console.log(err));
        };
        getTeam();
    }, [team_id]);

    const FIELDS = useMemo(
        () => [
            {
                field: "Team Manager: ",
                type: "text",
                value: manager,
                func: setManager,
            },
            {
                field: "Year of Establishment: ",
                type: "text",
                value: yearEst,
                func: setYearEst,
            },
            {
                field: "Number of Trophies: ",
                type: "text",
                value: trophies,
                func: setTrophies,
            },
            {
                field: "Number of Fans: ",
                type: "text",
                value: fans,
                func: setFans,
            },
        ],
        [team, manager, yearEst, trophies, fans]
    );

    // Remove the player from players list of the team
    const removePlayer = (player) => {
        // console.log(player);
        setPlayers((oldArray) => {
            const newArray = oldArray.filter((playr) => playr !== player);
            return [...newArray];
        });
    };

    const addPlayer = (player) => {
        setPlayers((oldPlayers) => [...oldPlayers, player]);
        // Reset the player field after adding it to the list
        setPlayer("");
    };

    // Send a request to save the changes on the system
    const saveTeamChanges = async () => {
        const newData = {
            ...team,
            manager,
            yearEst,
            trophies,
            fans,
            players,
        };
        // console.log(team);
        await axios
            .post("/teams/editTeam/" + team.name, { team: newData, user })
            .then((res) => {
                const { message } = res.data;
                if (message === "Team update is successful")
                    setalert({
                        message: "Update is successful",
                        severity: "success",
                    });
                else
                    setalert({
                        message: "There was an error while saving",
                    });
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="fixture" style={{ width: "100%", marginBottom: "3vh" }}>
            {team ? (
                <div style={{ width: "100%" }}>
                    <h2 style={{ textAlign: "center" }}>{team.name}</h2>
                    <div className="side-by-side" style={{ paddingBottom: 20 }}>
                        <img
                            className="teamLogo"
                            src={team.image}
                            alt={team.alt}
                        />
                        <div className="teamDetails">
                            {FIELDS.map(({ field, type, value, func }) => {
                                return (
                                    <h3 key={field} className="teamInfoEdit">
                                        <p style={{ flex: "1" }}>{field}</p>
                                        <input
                                            type={type}
                                            style={{ flex: "1", height: "3vh" }}
                                            name={field}
                                            value={value}
                                            onChange={(event) =>
                                                func(event.target.value)
                                            }
                                        />
                                    </h3>
                                );
                            })}
                            <Button onClick={saveTeamChanges}>
                                Save the changes
                            </Button>
                        </div>
                    </div>

                    <div className="playersSection">
                        <div className="players">
                            {players.map((player, index) => (
                                <div className="player" key={player}>
                                    <button
                                        style={{ marginRight: "1vw" }}
                                        onClick={() => removePlayer(player)}
                                    >
                                        remove
                                    </button>
                                    <p>
                                        {index + 1}: {player}
                                    </p>
                                </div>
                            ))}
                        </div>
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
                                onChange={(event) =>
                                    setPlayer(event.target.value)
                                }
                            />
                            <Button onClick={() => addPlayer(player)}>
                                Add Player
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}
