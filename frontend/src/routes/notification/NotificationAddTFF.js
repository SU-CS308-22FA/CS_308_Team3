import { Button, TextField } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import "./NotificationAddTFF.scss";
import { NotificationContext } from "../../contexts/notificationContext";

export default function NotificationAddTFF() {
    const { user, login, updateUser } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [classNameError, setClassNameError] = useState("errorHidden");

    const [NotificationHeader, setNotificationHeader] = useState("");
    const [NotificationContent, setNotificationContent] = useState("");

    const FIELDS = useMemo(
        () => [
            { field: "Notification Header", type: "text", value: NotificationHeader, func: setNotificationHeader },
            {
                field: "Notification Content",
                type: "text",
                value: NotificationContent,
                func: setNotificationContent,
            },

            // { field: "Score", type: "number", value: score, func: setScore},
        ],
        [NotificationHeader, NotificationContent]
    );
    const add_notification = async () => {
        if (
            NotificationHeader === "" ||
            NotificationContent === ""
        ) {
            setalert({
                message: "Please do not leave any of the fields empty!",
            });
            return;
        }

        await axios
            .post("/notifications/notificationAdd", {
                NotificationHeader: NotificationHeader,
                NotificationContent: NotificationContent,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "NotificationAdd is succesful") {
                    setalert({
                        message: "Notification is added to the system succesfully",
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
        <div className="NotificationAdd">
            <div>
                {
                    <div style={{ flexDirection: "column", alignItems: "center" }}>
                        <h3 style={{ marginLeft: "5vw"}}>New Notification</h3>
                        <div className="textForm">
                            <div className="textFieldGroup">
                            {FIELDS.map(({ field, type, value, func }) => {
                                    return (
                                        <div className="textField" key={field}>
                                            <p className="text">{field}</p>
                                            <TextField
                                                style={{ width: "50vw" }}
                                                label={field}
                                                type={type}
                                                value={value}
                                                id={field}
                                                onChange={(event) =>
                                                    func(event.target.value)
                                                }
                                            />
                                        </div>
                                    );
                                })}
                              {/* <div className="textField" key="Notification Header">
                                <p className="text">Notification Header</p>
                                <TextField 
                                    style = {{ width: "50vw" }}
                                    label = "Notification Header"
                                    type = "text"
                                    value = {NotificationHeader}
                                    onChange={(event) =>
                                        setNotificationHeader(event.target.NotificationHeader)
                                   }
                                />
                              </div>

                              <div className="textField" key="Notification Content">
                                <p className="text">Notification Content</p>
                                <TextField 
                                    style = {{ width: "50vw" }}
                                    label = "Notification Content"
                                    type = "text"
                                    value = {NotificationContent}
                                     onChange={(event) =>
                                        setNotificationContent(event.target.NotificationContent)
                                   }
                                />
                              </div> */}
  
                            </div>
                        </div>
                        <Button
                            onClick={add_notification}
                            style={{ marginTop: "2vh", marginLeft: "2vw" }}
                            id="notification_add_button"
                        >
                            Add Notification
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
}
