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
import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import { NotificationContext } from "../../contexts/notificationContext";

import { UserContext } from "../../contexts/userContext";

import "./refereeDetails.scss";

export default function RefereeDetails() {
    const [vote, setVote] = useState("");
    const location = useLocation();
    const {setalert } = useContext(NotificationContext);
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

    const votefunction = async () => {
        if (
            vote === ""
        ) {
            setalert({
                message: "You have to select score",
            });
            return;
        }

        await axios
            .post("/referees/refereeVote", {
                id1: name,
                score: vote,
                user

        
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Referee score updated succesful") {
                    setalert({
                        message: "Referee score changed succesfully",
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
            
            {user && (
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                    Vote
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={vote}
                    label="Vote"
                    onChange={(event) =>
                        setVote(event.target.value)
                    }
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <Button onClick={votefunction} variant="outlined" style={{ marginTop: "2vh" }}>
                   Vote
                </Button>
            </FormControl>
            )}

        </div>

    );


}
