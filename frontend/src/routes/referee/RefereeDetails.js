import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./refereeDetails.scss";

export default function RefereeDetails() {
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
        </div>
    );
}
