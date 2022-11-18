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
import "./RefereeAdd.scss";
import { NotificationContext } from "../../contexts/notificationContext";

export default function RefereeAdd() {
    const { login, updateUser } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [classNameError, setClassNameError] = useState("errorHidden");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [experience, setExperience] = useState("");
    const [license, setLicense] = useState("");
    const [hometown, setHometown] = useState("");
    //const [score, setScore] = useState("");
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
            { field: "Years of Experience", type: "number", value: experience, func: setExperience},
            { field: "License", type: "text", value: license, func: setLicense},
            { field: "Hometown", type: "text", value: hometown, func: setHometown},
            // { field: "Score", type: "number", value: score, func: setScore},
        ],
        [name, surname, age, experience, license, hometown]
    );
    const add_referee = async () => {
         if (
            name === "" ||
            surname === "" ||
            experience === "" ||
            age === "" ||
            license === "" ||
            hometown === ""
        ) {
            setalert({
                open: true,
                message: "You cannot leave any of the fields empty!",
            });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        //console.log(hashedPassword);
        await axios
            .post("/referees/", {
                name: name,
                surname: surname,
                age: parseInt(age),
                experience: experience,
                license: license,
                hometown: hometown
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Referee added succesfully") {
                    setalert({
                        message:
                            "Referee added to the system",
                        severity: "success",
                    });
                    updateUser(res.data.user);
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify(res.data.user)
                    );
                } 
            })
            .catch((err) => {
                console.log(err);
            });
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
        <div className="RefereeAdd">
            <div>
                {(
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
                        <Button onClick={add_referee} style={{ marginTop: "2vh" }}>
                            Add Referee
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
