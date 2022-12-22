import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { NotificationContext } from "../../contexts/notificationContext";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";

export default function MatchAdd() {
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [classNameError, setClassNameError] = useState("errorHidden");

    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [referee, setReferee] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [referees, setReferees] = useState(null);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const pullLists = async () => {
            await axios.get("/teams/list").then((res) => {
                // console.log(res.data);
                setTeams(res.data.teams);
            });
            await axios
                .get("/referees/namelist")
                .then((res) => {
                    // console.log(res.data.referees);
                    setReferees(res.data.referees);
                })
                .catch((err) => {
                    console.error(err);
                });
        };
        pullLists();
    }, []);

    // const FIELDS = useMemo(
    //     () => [{ field: "Team: ", type: "text", value: name, func: setName }],
    //     [name, surname, age, experience, license, hometown]
    // );
    const addMatch = async () => {
        if (team1 === "" || team2 === "" || date === "k") {
            setalert({
                message: "You cannot leave any of the fields empty!",
            });
            return;
        } else if (team1 === team2) {
            setalert({
                message: "You cannot select the same team twice!",
            });
            return;
        }

        // await axios
        //     .post("/fixture/addmatch", {
        //         name: name + " " + surname,
        //         age: parseInt(age),
        //         experience: parseInt(experience),
        //         license: license,
        //         hometown: hometown,
        //         image: image,
        //     })
        //     .then((res) => {
        //         console.log(res.data);
        //         if (res.data.message === "RefereAdd is succesful") {
        //             setalert({
        //                 message: "Referee is added to the system succesfully",
        //                 severity: "success",
        //             });
        //         } else {
        //             setalert({
        //                 message: res.data.message,
        //                 severity: "error",
        //             });
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };
    console.log(date.getMonth());
    return (
        <div className="matchAddContainer">
            {
                <div style={{ flexDirection: "column" }}>
                    <h3>Add a New Match</h3>
                    <div className="textFieldGroup">
                        {/* {FIELDS.map(({ field, type, value, func }) => {
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
                                })} */}

                        <p>Teams</p>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Team1
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={team1}
                                label="Team Supported"
                                onChange={(event) =>
                                    setTeam1(event.target.value)
                                }
                            >
                                {teams !== [] &&
                                    teams.map((team, index) => {
                                        return (
                                            <MenuItem
                                                value={team}
                                                key={index.toString()}
                                            >
                                                {team}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Team2
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={team2}
                                label="Team Supported"
                                onChange={(event) =>
                                    setTeam2(event.target.value)
                                }
                            >
                                {teams !== [] &&
                                    teams.map((team, index) => {
                                        return (
                                            <MenuItem
                                                value={team}
                                                key={index.toString()}
                                            >
                                                {team}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </FormControl>

                        <p>Referee</p>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Referee
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={referee}
                                label="Team Supported"
                                onChange={(event) =>
                                    setReferee(event.target.value)
                                }
                            >
                                <MenuItem value={""}>No referee yet</MenuItem>
                                {referees &&
                                    referees.map((referee, index) => (
                                        <MenuItem
                                            key={index.toString()}
                                            value={referee}
                                        >
                                            {referee}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>

                        <p>Date</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>

                        <p>Time</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Basic example"
                                value={time}
                                onChange={(newValue) => setTime(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <Button onClick={addMatch} style={{ marginTop: "2vh" }}>
                        Add Match
                    </Button>
                </div>
            }
        </div>
    );
}
