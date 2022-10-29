import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import "../../index.css";

export default function Profile() {
    const {
        user: { name, surname, age, memberType },
    } = useContext(UserContext);

    return (
        <div className="pageContainer">
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Age: {age}</p>
            <p>Membership: {memberType}</p>
            <Button>Change my password</Button>
            <Button>Log out</Button>
        </div>
    );
}
