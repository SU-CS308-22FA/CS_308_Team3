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
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordAgain, setNewPasswordAgain] = useState("");

    const FIELDS = useMemo(
        () => [
            { field: "Old Password", value: oldPassword, func: setOldPassword },
            { field: "New Password", value: newPassword, func: setNewPassword },
            {
                field: "New Password Again",
                value: newPasswordAgain,
                func: setNewPasswordAgain,
            },
        ],
        [oldPassword, newPassword, newPasswordAgain]
    );

    const submitPassword = async () => {
        if (newPassword !== newPasswordAgain) {
            setalert({ message: "Your passwords are not matching!" });
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(newPassword, salt);
        await axios
            .post("/users/changePassword", {
                user,
                oldPassword,
                newPassword: hashedPassword,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Password has been changed") {
                    setalert({
                        message: "Your password has been changed!",
                        severity: "success",
                    });
                } else if (res.data.message === "Password is wrong") {
                    setalert({ message: "Your password is wrong!" });
                } else {
                    setalert({ message: "There is an error!" });
                }
            });
    };

    return (
        <div className="profileWoLogin">
            <div className="">
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
                                    type={"password"}
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
            </div>
        </div>
    );
}
