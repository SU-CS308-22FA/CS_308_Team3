import { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./refereeTable.scss";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function RefereeTable() {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const [referees, setReferees] = useState(null);
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

    const compareReferees = (referee1, referee2) => {
        navigate(`/referee-compare/${referee1}/${referee2}`);
    };
    console.log({ user });
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
                <Button onClick={() => compareReferees(referee1, referee2)}>
                    Compare
                </Button>
            </div>
            {user && user.userType === "TFF" && (
                <div className="addRefButton">
                    <Button onClick={() => navigate("/add-referee")}>
                        Add New Referee
                    </Button>
                </div>
            )}
            {/* <h3 className="comparisonContainer">Ars</h3> */}
            <div className="wrapContainer">
                {referees &&
                    referees.map(
                        (
                            {
                                name,
                                age,
                                experience,
                                license,
                                hometown,
                                score,
                                image,
                                last3Matches,
                            },
                            index
                        ) => {
                            return (
                                <div
                                    className="refereeContainer"
                                    key={index}
                                    onClick={() =>
                                        navigate(name, {
                                            state: { name: name },
                                        })
                                    }
                                >
                                    <div
                                        className="refereeInfo"
                                        // onClick={() => {
                                        //     console.log("asd"); //TODO go to match
                                        // }}
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
                                        <p>Years of experience: {experience}</p>
                                        <p>License: {license}</p>
                                        <p>Hometown: {hometown}</p>
                                        <p>Score: {`${score}`.slice(0,4)}</p>
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
                {referees === null && <h3>Loading...</h3>}
            </div>
            <br></br>
				<br></br>
				<footer>
      			<p><b>Turkish Football Federation 2022.</b></p>
				<p>Services</p>
				  <p><a href="/">Fixture</a></p>
				  <p><a href="/referees">Referees</a></p>
				  <p><a href="/teams">Teams</a></p>
				  <p><a href="/profile">Profile</a></p>
				  <p><a href="/faq">FAQ</a></p>
				  <p><a href="/topratedreferee">Top Rated Referee</a></p>
				  <p><a href="/topratedmatch">Top Rated Match</a></p>
    			</footer>
        </div>
    );
}
