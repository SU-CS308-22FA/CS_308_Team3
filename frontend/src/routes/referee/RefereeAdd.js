import { Button, TextField } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import "./RefereeAdd.scss";
import { NotificationContext } from "../../contexts/notificationContext";

export default function RefereeAdd() {
    const { user, login, updateUser } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [classNameError, setClassNameError] = useState("errorHidden");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [experience, setExperience] = useState("");
    const [license, setLicense] = useState("");
    const [hometown, setHometown] = useState("");
    const [image, setImage] = useState("");
    const [score, setScore] = useState("");

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
            {
                field: "Years of Experience",
                type: "number",
                value: experience,
                func: setExperience,
            },
            {
                field: "License",
                type: "text",
                value: license,
                func: setLicense,
            },
            {
                field: "Hometown",
                type: "text",
                value: hometown,
                func: setHometown,
            },
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
                message: "You cannot leave any of the fields empty!",
            });
            return;
        }

        await axios
            .post("/referees/refereeAdd", {
                name: name + " " + surname,
                age: parseInt(age),
                experience: parseInt(experience),
                license: license,
                hometown: hometown,
                image: image,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "RefereAdd is succesful") {
                    setalert({
                        message: "Referee is added to the system succesfully",
                        severity: "success",
                    });
                } else {
                    setalert({
                        message: res.data.message,
                        severity: "error",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            // console.log(URL.createObjectURL(img));
            setImage(URL.createObjectURL(img));
            // setImage(img);
            // console.log(img);
        }
    };

    return (
        <div className="RefereeAdd">
            <div>
                {
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
                        <div>
                            <p className="text">Profile Photo</p>
                            {/* <input
                                type="file"
                                name="myImage"
                                onChange={onImageChange}
                            /> */}
                            <TextField
                                style={{ width: "20vw" }}
                                label={"Image URL"}
                                type={"text"}
                                value={image}
                                onChange={(event) =>
                                    setImage(event.target.value)
                                }
                            />
                        </div>
                        <Button
                            onClick={add_referee}
                            style={{ marginTop: "2vh" }}
                        >
                            Add Referee
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
}
