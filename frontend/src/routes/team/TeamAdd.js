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
                field: "Manager",
                type: "text",
                value: manager,
                func: setManager,
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
    const addTeam = async () => {
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

        await axios
            .post("/teams/addTeam", {
                name,
                shortName,
                manager,
                trophies,
                fans,
                yearEst,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Team is added") {
                    setalert({
                        message: "Team is added to the system succesfully",
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
                        <Button onClick={addTeam} style={{ marginTop: "2vh" }}>
                            Add Team
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
}
