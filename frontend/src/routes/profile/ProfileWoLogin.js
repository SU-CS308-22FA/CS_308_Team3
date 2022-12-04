import {
    Alert,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import bcrypt from "bcryptjs";

import "./profile.scss";
import { NotificationContext } from "../../contexts/notificationContext";

export default function ProfileWoLogin() {
    const { login, updateUser } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [showSignUp, setShowSignUp] = useState(true);
    const [switchButtton, setSwitchButton] = useState("signup");
    const [classNameError, setClassNameError] = useState("errorHidden");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [teamSupported, setTeamSupported] = useState("");
    const [password, setPassword] = useState("");

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get("/teams/list").then((res) => {
            console.log(res.data);
            setTeams(res.data.teams);
        });
    }, []);

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
            { field: "Email", type: "text", value: email, func: setEmail },
            {
                field: "Password",
                type: "password",
                value: password,
                func: setPassword,
            },
        ],
        [name, surname, age, email, password]
    );

    const Login = () => {
        if (password.length < 8) {
            console.log("error");
            setalert({
                message: "Password has to be at least 8 characters!",
            });
            return;
        } else if (email === "") {
            setalert({
                message: "You cannot leave email field empty!",
            });
            return;
        }
        login(email, password);
    };

    const signup = async () => {
        if (password.length < 8) {
            console.log("error");
            setalert({
                message: "Password has to be at least 8 characters!",
            });
            return;
        } else if (
            name === "" ||
            surname === "" ||
            email === "" ||
            age === ""
        ) {
            setalert({
                message: "You cannot leave any of the fields empty!",
            });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        //console.log(hashedPassword);
        await axios
            .post("/users/signup", {
                name: name,
                surname: surname,
                age: parseInt(age),
                teamSupported: teamSupported,
                email: email,
                password: hashedPassword,
                gender: "Male",
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Registration is succesful") {
                    setalert({
                        message: "Registration completed succesfully",
                        severity: "success",
                    });
                    updateUser(res.data.user);
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify(res.data.user)
                    );
                } else if (res.data.message === "The email is taken") {
                    setalert({
                        message:
                            "The email is already taken, you can try to login",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const googleSignUp = () => {
        console.log({
            name: name,
            surname: surname,
            age: age,
            teamSupported: teamSupported,
            email: email,
        });
    };

    const handleSwitch = (event, value) => {
        if (value === "signup") setShowSignUp(true);
        else setShowSignUp(false);
        setSwitchButton(value);
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <div className="profileWoLogin">
            <div>
                <div className="switch">
                    <ToggleButtonGroup
                        size="large"
                        color="warning"
                        value={switchButtton}
                        onChange={handleSwitch}
                        exclusive={true}
                        aria-label="Large sizes"
                    >
                        <ToggleButton value="signup">Sign Up Page</ToggleButton>
                        <ToggleButton value="login">Login Page</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {showSignUp && (
                    <div style={{ flexDirection: "column" }}>
                        <h3 className="text">Your personal details</h3>
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
                        </div>
                        <div
                        // style={{
                        //     flexDirection: "row",
                        //     display: "flex",
                        //     height: "3%",
                        // }}
                        >
                            <p className="text">Profile Photo</p>
                            <input
                                type="file"
                                name="myImage"
                                onChange={onImageChange}
                            />
                        </div>
                        <Button onClick={signup} style={{ marginTop: "2vh" }}>
                            Complete Sign Up
                        </Button>
                    </div>
                )}
                {!showSignUp && (
                    <div className="login">
                        <h3 className="text">Enter your credentials</h3>
                        <div className="textForm">
                            {FIELDS.slice(3).map(({ field, value, func }) => {
                                return (
                                    <div className="textField" key={field}>
                                        <p className="text">{field}</p>
                                        <TextField
                                            style={{ width: "20vw" }}
                                            label={field}
                                            value={value}
                                            type={
                                                field === "Password"
                                                    ? "password"
                                                    : "text"
                                            }
                                            onChange={(event) =>
                                                func(event.target.value)
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <Button onClick={Login} style={{ marginTop: "2vh" }}>
                            Log in
                        </Button>
                        <div className={classNameError}>
                            <Alert
                                severity="error"
                                onClose={() => setClassNameError("errorHidden")}
                            >
                                Your credentials are wrong, please check them
                                again!
                            </Alert>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
