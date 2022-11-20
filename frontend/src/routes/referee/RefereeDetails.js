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
                <img src={referee.image} alt={referee.name} />
                <div className="refereeDetails">
                    <h3>Name: {referee.name}</h3>
                    <h3>Age: {referee.age}</h3>
                    <h3>Years of Experience: {referee.experience}</h3>
                    <h3>Licence: {referee.license}</h3>
                    <h3>Hometown: {referee.hometown}</h3>
                </div>
            </div>
            <h3>Last 3 Matches</h3>
        </div>
    );
}
