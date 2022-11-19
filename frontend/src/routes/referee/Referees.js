import { useEffect, useState } from "react";
import axios from "axios";

import "./referee.scss";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Referees() {
    const navigate = useNavigate();

    const [referees, setReferees] = useState();
    const [referee1, setReferee1] = useState("");
    const [referee2, setReferee2] = useState("");

    useEffect(() => {
        axios
            .get("/referees/list")
            .then((res) => {
                setReferees(res.data.referees);
            })
            .catch((err) => console.log(err));
    }, []);

    const compareReferees = () => {}; //TODO

    return (
        <div>
            <h3>Referees</h3>
            <div className="comparisonContainer">
                <FormControl sx={{ m: 1, width: 250 }}>
                    <InputLabel id="ref1-label">Referee 1</InputLabel>
                    <Select
                        labelId="ref1-label"
                        id="ref1-name"
                        value={referee1}
                        onChange={(e) => setReferee1(e.target.value)}
                        input={<OutlinedInput label="Referee1" />}
                        // MenuProps={MenuProps}
                    >
                        {referees &&
                            referees.map(({ name }, index) => (
                                <MenuItem
                                    key={index}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <p>vs</p>
                <FormControl sx={{ m: 1, width: 250 }}>
                    <InputLabel id="ref2-label">Referee 2</InputLabel>
                    <Select
                        labelId="ref2-label"
                        id="ref2-name"
                        value={referee2}
                        onChange={(e) => setReferee2(e.target.value)}
                        input={<OutlinedInput label="Referee2" />}
                        // MenuProps={MenuProps}
                    >
                        {referees &&
                            referees.map(({ name }, index) => (
                                <MenuItem
                                    key={index}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <Button onClick={compareReferees}>Compare</Button>
            </div>
            <div>
                <Button onClick={() => navigate("/add-referee")}>
                    Add New Referee
                </Button>
            </div>
            {/* <h3 className="comparisonContainer">Ars</h3> */}
            <div className="wrapContainer">
                {referees &&
                    referees.map(
                        (
                            {
                                name,
                                age,
                                exp,
                                licence,
                                hometown,
                                score,
                                image,
                                last3Matches,
                            },
                            index
                        ) => {
                            return (
                                <div className="refereeContainer" key={index}>
                                    <div
                                        className="refereeInfo"
                                        onClick={() => {
                                            console.log("asd"); //TODO go to match
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={name}
                                            style={{
                                                height: "30vh",
                                                width: "auto",
                                                marginBottom: "2vh",
                                            }}
                                        />
                                        <p>Name: {name}</p>
                                        <p>Age: {age}</p>
                                        <p>Years of experience: {exp}</p>
                                        <p>License: {licence}</p>
                                        <p>Hometown: {hometown}</p>
                                        <p>Score: {score}</p>
                                    </div>
                                    <div className="lastMatchesContainer">
                                        <p>Last 3 matches:</p>
                                        <div className="lastMatches">
                                            {last3Matches &&
                                                last3Matches.map(
                                                    (
                                                        { logo1, logo2, date },
                                                        index
                                                    ) =>
                                                        date && (
                                                            <div
                                                                className="match"
                                                                key={index}
                                                            >
                                                                <img
                                                                    src={logo1}
                                                                    alt={
                                                                        "logo1"
                                                                    }
                                                                />
                                                                <p>vs</p>
                                                                <img
                                                                    src={logo2}
                                                                    alt={
                                                                        "logo2"
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}
