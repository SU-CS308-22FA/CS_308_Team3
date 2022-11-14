import { useEffect, useState } from "react";
import axios from "axios";

import "./referee.scss";

export default function Referees() {
    const [referees, setReferees] = useState([
        {
            name: "Cüneyt Çakır",
            age: 45,
            exp: 12,
            licence: "FIFA",
            hometown: "İstanbul",
            score: 7.5,
            image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
            matches: [
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
            ],
        },
        {
            name: "Cüneyt Çakır",
            age: 45,
            exp: 12,
            licence: "FIFA",
            hometown: "İstanbul",
            score: 7.5,
            image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
            matches: [
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
            ],
        },
        {
            name: "Cüneyt Çakır",
            age: 45,
            exp: 12,
            licence: "FIFA",
            hometown: "İstanbul",
            score: 7.5,
            image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
            matches: [
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
            ],
        },
        {
            name: "Cüneyt Çakır",
            age: 45,
            exp: 12,
            licence: "FIFA",
            hometown: "İstanbul",
            score: 7.5,
            image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
            matches: [
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
            ],
        },
    ]);

    // useEffect(() => {
    //     axios
    //         .get("/referees/list")
    //         .then((res) => {
    //             setReferees(res.data.referees);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    return (
        <div>
            <h3>Referees</h3>
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
                                matches,
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
                                        <p>Last 3 matches: {}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}
