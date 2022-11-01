import { Button, requirePropFactory } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import "./userProfile.scss";

export default function Profile() {
    const {
        user: { name, surname, email, age, memberType },
    } = useContext(UserContext);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/changepassword`; 
        navigate(path);
    }

    const ChangePassword = () => {
        console.log("Change Password")
        //TODO: Change Password
        return routeChange();
    }

    const Logout = () => {
        console.log("Logout")
        //TODO: Logout
    }

    return (
        <div className="profile">
            <div className="pageContainer">
                <img src = {require("./../../assets/profiledefault.png")} width="200px" height="200px"></img>
                <h3 className="text">Your Profile</h3>
                
                
                <p className="text"><b>Name:</b> {name}</p> 
                <p className="text"><b>Surname:</b> {surname}</p> 
                <p className="text"><b>Email:</b> {email}</p>
                <p className="text"><b>Age:</b> {age}</p> 
                <p className="text"><b>Membership:</b> {memberType}</p> 

                <Button onClick={ChangePassword}>Change my password</Button>
                <Button onClick={Logout}>Log out</Button>
            </div>
        </div>
    );
}
