import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

import "./refereeDetails.scss";

export default function RefereeDetails() {
    const location = useLocation();
    const {
        state: { name },
    } = location; 

    const { user } = useContext(UserContext);

    // console.log(location.state);
    // console.log(route.params.name);
    const [referee, setReferee] = useState({ name: name });
    const [status, setStatus] = useState(null);

    const changeRefereeValue = useCallback((key, value) => {
        setReferee({...referee, [key]: value});
    }, [referee]);

    const isStaff = user && user.userType === "TFF";

    const detailView = (field) => {
        const isIntField = ["age", "experience"].includes(field);

        return (
            isStaff
            ? 
            <div style={{display: "inline-block"}}>
                <TextField id="outlined-basic" label="Value" variant="outlined" 
                    value={referee[field] || ""} 
                    type={isIntField ? "number" : undefined}
                    onChange={ev => changeRefereeValue(field, isIntField ? parseInt(ev.target.value) : ev.target.value)} sx={{width: isIntField ? 70 : 180}}/>
            </div>
            :
            <div style={{display: "inline-block"}}>
                {referee[field]}
            </div>
        )
    };

    useEffect(() => {
        axios.get("referees/" + referee.name).then((res) => {
            // setReferee(res.data.referee);
            const { message, referee } = res.data;
            if (message === "Found") setReferee(referee);
        });
    }, []);

    const updateReferee = () => {
        setStatus(["info", "Updating referee..."]);
        axios.put("/referees/update", referee).then((res) => {
            const message = res.data;
            setStatus(["success", message]);
        }).catch((res) => {
            const message = res.data;
            setStatus(["error", message]);
        });
    }

    const deleteReferee = () => {
        setStatus(["info", "Deleting referee..."]);
        axios.delete("/referees/" + referee.name).then((res) => {
            window.location.href = "/referees";
        }).catch((res) => {
            const message = res.data;
            setStatus(["error", message]);
        });
    }

    return (
        <div className="refereeDetailsContainer">
            <div>
                <img
                    className="refereePhoto"
                    src={referee.image}
                    alt={referee.name}
                />
                {isStaff && <h3>{detailView("image")}</h3>}
                <div className="refereeDetails">
                    <h3>Age: {detailView("age")}</h3>
                    <h3>Years of Experience: {detailView("experience")}</h3>
                    <h3>License: {detailView("license")}</h3>
                    <h3>Hometown: {detailView("hometown")}</h3>
                </div>
            </div>
            <div>
                <h1>{detailView("name")}</h1>
                {status && <Alert severity={status[0]} sx={{width: 150, mb: 2}}>{status[1]}</Alert>}
                {isStaff && <Button variant="contained" sx={{width: 180}} onClick={updateReferee}>Update Referee</Button>}
                <Box sx={{my: 2}} />
                {isStaff && <Button variant="outlined" color="error" sx={{width: 180}} onClick={deleteReferee}>Delete Referee</Button>}

            </div>
            <div className="lastMatchesContainer">
                <p style={{ fontSize: "20px" }}>Last 3 matches:</p>
                <div className="lastMatches">
                    {referee.last3Matches &&
                        referee.last3Matches.map(
                            ({ logo1, logo2, date }, index) =>
                                date && (
                                    <div className="match" key={index}>
                                        <img src={logo1} alt={"logo1"} />
                                        <p>vs</p>
                                        <img src={logo2} alt={"logo2"} />
                                    </div>
                                )
                        )}
                </div>
            </div>
        </div>
    );
}
