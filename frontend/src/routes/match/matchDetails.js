import axios from "axios"
import { useEffect, useState } from "react";
import "./matchDetails.css"
import { Divider } from "@mui/material";


export function MatchDetails() {
  const [match, setMatch] = useState();

  useEffect(() => {
    axios
        .get("/match/get")
        .then((res) => {
            console.log(res.data.match);
            setMatch(res.data.match);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapContainer">
      {/* <div className="top-to-bottom"> */}
        {/* <h3>Match Details!</h3> */}
        {match ? 

        <div>
          <div className="side-by-side">

            <div className="left-side-top-to-bottom" style={{overflow: "auto"}}>
              <img className="matchTeamLogo"
              src={match.logo1}
              alt={match.team1}/>

              <h1 className = "team-title"> {match.team1} </h1>
              <h2 className="team-title"> {match.team1Coach}</h2>
            </div>

            <Divider className="divider" orientation="vertical" flexItem>
              <h1 className="team-title"> {match.team1Goals} - {match.team2Goals}</h1>

              <h3 className="team-title"> Match Date: </h3>
              <h4 className="team-title"> {match.date}</h4>


              <h3 className="team-title"> Referee: </h3>
              <h3 className="team-title"> {match.referee}</h3>
            </Divider>


            <div className="right-side-top-to-bottom">
              <img className="matchTeamLogo" style={{overflow: "auto"}}
                src={match.logo2}
                alt={match.team2}/>

              <h1 className = "team-title"> {match.team2} </h1>
              <h2 className="team-title"> {match.team2Coach}</h2>
            </div>
          </div>
        </div>
        : console.log("Not Here")}
    </div>
  );
} 