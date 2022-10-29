import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import "./profile.scss";
import axios from "axios";
import bcrypt from "bcryptjs";

export default function ProfileWoLogin() {
    const { login } = useContext(UserContext);

    const [name, setName] = useState("");
    const [surname, setSurame] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const signup = async () => {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        //const hashedPassword = password;
        console.log(hashedPassword);
        await axios
            .post("/user/signup", {
                name: name,
                surname: surname,
                age: age,
                email: email,
                password: hashedPassword,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const googleSignUp = () => {};

    return (
        <div className="profileWoLogin">
            <p>Please log in or sign up</p>
            <div className="textForm">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
            <Button onClick={signup}>Sign Up</Button>
            <Button onClick={login}>Log in</Button>
        </div>
    );
}
