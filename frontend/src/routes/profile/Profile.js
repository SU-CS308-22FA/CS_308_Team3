import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    requirePropFactory,
    Select,
    TextField,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../contexts/notificationContext";
import { UserContext } from "../../contexts/userContext";
import "./profile.scss";

export default function Profile() {
    const { user, resetUser } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [teamSupported, setTeamSupported] = useState(user.teamSupported);

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios
            .get("/teams/list")
            .then((res) => {
                console.log(res.data);
                setTeams(res.data.teams);
            })
            .catch((err) => console.log(err));

        setName(user.name);
        setSurname(user.surname);
        setAge(user.age);
        setTeamSupported(user.teamSupported);
    }, [user]);

    const FIELDS = useMemo(
        () => [
            { field: "Name", type: "text", value: name, func: setName },
            {
                field: "Surname",
                type: "text",
                value: surname,
                func: setSurname,
            },
            { field: "Age", type: "number", value: age, func: setAge },
        ],
        [name, surname, age, user]
    );

    const ChangePassword = () => {
        console.log("Change Password");
        //TODO: Change Password
        navigate("/changepassword");
    };

    const UpdateProfile = () => {
        axios
            .post("/users/updateProfile", {
                _id: user._id,
                newProfile: {
                    ...user,
                    name,
                    surname,
                    age,
                    teamSupported,
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Update is successful") {
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify({
                            ...user,
                            name,
                            surname,
                            age,
                            teamSupported,
                        })
                    );
                    setalert({
                        message: "Your profile is updated succesfully",
                        severity: "success",
                    });
                }
            });
    };

    const Logout = () => {
        axios
            .post("/users/logout", { _id: user._id })
            .then((res) => {
                resetUser();
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    const DeleteAccount = () => {
        axios
            .post("/users/deleteAccount", { _id: user._id })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Account is deleted") {
                    setalert({
                        message: res.data.message,
                        severity: "success",
                    });
                    resetUser();
                } else
                    setalert({
                        message: "There was an error while deleting account",
                    });
            })
            .then((err) => console.log(err));
    };

    return (
        <div className="profileWoLogin">
            <div className="column">
                <img
                    src={require("./../../assets/profiledefault.png")}
                    alt="profile"
                    className="pp"
                />
                <h3 className="text">Your Profile</h3>

                {FIELDS.map(({ field, type, value, func }) => {
                    return (
                        <div className="textField" key={field}>
                            <p className="text">{field}</p>
                            <TextField
                                style={{ width: "20vw" }}
                                label={field}
                                type={type}
                                value={value}
                                onChange={(event) => func(event.target.value)}
                            />
                        </div>
                    );
                })}
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                        Team Supported
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={teamSupported}
                        label="Team Supported"
                        onChange={(event) =>
                            setTeamSupported(event.target.value)
                        }
                    >
                        <MenuItem value="">
                            <em>No team supported</em>
                        </MenuItem>
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

                <div
                    style={{
                        margin: "3vh 0px 1vh 0px",
                        flexDirection: "row",
                        display: "flex",
                        flex: 1,
                        justifyContent: "space-between",
                    }}
                >
                    <Button onClick={UpdateProfile}>Update my profile</Button>
                    <Button onClick={ChangePassword}>Change my password</Button>
                    <Button onClick={Logout} color="warning">
                        Log out
                    </Button>
                    <Button onClick={DeleteAccount} color="error">
                        Delete Account
                    </Button>
                </div>
            </div>
        </div>
    );
}
