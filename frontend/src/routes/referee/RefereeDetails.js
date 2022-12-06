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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./refereeDetails.scss";

export default function RefereeDetails() {
    const [vote, setVote] = useState("");
    const location = useLocation();
    const {
        state: { name },
    } = location;
    // console.log(location.state);
    // console.log(route.params.name);
    const [referee, setReferee] = useState({ name: name });

    useEffect(() => {
        axios.get("referees/" + referee.name).then((res) => {
            // setReferee(res.data.referee);
            const { message, referee } = res.data;
            if (message === "Found") setReferee(referee);
        });
    }, []);
    return (
        <div className="refereeDetailsContainer">
            <div>
                <img
                    className="refereePhoto"
                    src={referee.image}
                    alt={referee.name}
                />
                <div className="refereeDetails">
                    <h3>Age: {referee.age}</h3>
                    <h3>Years of Experience: {referee.experience}</h3>
                    <h3>License: {referee.license}</h3>
                    <h3>Hometown: {referee.hometown}</h3>
                    <h3>Score: {referee.score}</h3>

                </div>
            </div>
            <h1>{referee.name}</h1>
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
                <Button onClick={vote} variant="outlined" style={{ marginTop: "2vh" }}>
                   Vote
                </Button>
            </FormControl>

        </div>

    );


}
