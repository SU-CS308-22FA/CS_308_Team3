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

export default function ChangePassword() {
    const { setalert } = useContext(NotificationContext);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordAgain, setNewPasswordAgain] = useState("");

    const [classNameError, setClassNameError] = useState("errorHidden");

    const FIELDS = useMemo(
        () => [
            { field: "Old Password", value: oldPassword, func: setOldPassword },
            { field: "New Password", value: newPassword, func: setNewPassword },
            { field: "New Password Again", value: newPasswordAgain, func: setNewPasswordAgain },
        ],
        [oldPassword, newPassword, newPasswordAgain]
    );

    const submitPassword = () => {
        console.log("Submitting password")
        //TODO: Submit password
    }

    return (
        <div>
            <h3 className="text">Change Your Password</h3>
            <div className="textForm">
                {FIELDS.map(({ field, value, func }) => {
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

            <Button onClick={submitPassword} style={{ marginTop: "2vh" }}>
                Change Password
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
    )
}