import { useEffect, useMemo, useState } from "react";
import "./TeamDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TeamEdit() {
    const [team, setTeam] = useState();

    const [manager, setManager] = useState("");
    const [yearEst, setYearEst] = useState("");
    const [thropies, setThropies] = useState("");
    const [fans, setFans] = useState("");
    const [numPlayers, setNumPlayers] = useState("");
    const [players, setPlayers] = useState([]);

    var team_id = useParams().id;

    useEffect(() => {
        axios
            .get("/teams/" + team_id)
            .then((res) => {
                console.log(res.data.team);
                setTeam(res.data.team);
                setManager(res.data.team.manager);
                setYearEst(res.data.team.establishment);
                setThropies(res.data.team.trophies);
                setFans(res.data.team.fans);
                setNumPlayers(res.data.team.players.length);
                setPlayers(res.data.team.players);
            })
            .catch((err) => console.log(err));
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
                value: thropies,
                func: setThropies,
            },
            {
                field: "Number of Fans: ",
                type: "text",
                value: fans,
                func: setFans,
            },
            {
                field: "Number of Players: ",
                type: "text",
                value: numPlayers,
                func: setNumPlayers,
            },
        ],
        [team]
    );

    const removePlayer = (player) => {
        console.log(player);
        setPlayers((oldArray) => {
            console.table(oldArray);
            oldArray.pop(player);
            console.table(oldArray);
            return oldArray;
        });
    };

    return (
        <div className="fixture" style={{ width: "100%" }}>
            {team ? (
                <div style={{ width: "100%" }}>
                    <h2 style={{ textAlign: "center" }}>{team.name}</h2>
                    <div className="side-by-side" style={{ paddingBottom: 20 }}>
                        <img
                            className="teamLogo"
                            src={team.anthem}
                            alt={team.alt}
                        />
                        <div className="teamDetails">
                            {FIELDS.map(({ field, type, value, func }) => {
                                return (
                                    <h3 key={field} style={{ margin: "1vh" }}>
                                        {field}
                                        <input
                                            type={type}
                                            name={field}
                                            value={value}
                                            onChange={(event) =>
                                                func(event.target.value)
                                            }
                                        />
                                    </h3>
                                );
                            })}
                        </div>
                    </div>

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
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}
