import axios from "axios"
import { useEffect, useState } from "react";
import "./matchDetails.css"
import { Divider } from "@mui/material";


export function MatchDetails() {
  const [match, setMatch] = useState();
  var match2= {
    
    team1: "Fenerbahçe",
    logo1: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png",
    team2: "Galatasaray",
    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
    date: "6.11.2002 20:00",
    referee: "Mustafa Çulcu",
    team1Goals: 6,
    team2Goals: 0,
  
  }

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
    <div>
      <h3>Match Details!</h3>
      <div className="WrapContainer">
        {match ? 

          console.log("Hello")
        // <div className="side-by-side">

        //   <div className="top-to-bottom">
        //     <img className="matchTeamLogo"
        //     src={match.logo1}
        //     alt={match.team1}/>

        //     <h2 className = "team-title"> {match.team1} </h2>
        //     <h1 className="team-title"> {match.team1Goals}</h1>
        //   </div>

        //   <Divider orientation="vertical" flexItem></Divider>

        //   <div className="top-to-bottom">
        //     <Divider orientation="vertical" flexItem></Divider>
        //     <h2 className="team-title"> Match Date: </h2>
        //     <h2 className="team-title"> {match.date}</h2>


        //     <h2 className="team-title"> Referee: </h2>
        //     <h2 className="team-title"> {match.referee}</h2>
        //   </div>

        //   <div className="top-to-bottom">
        //   <img className="matchTeamLogo"
        //     src={match.logo2}
        //     alt={match.team2}/>

        //     <h2 className = "team-title"> {match.team2} </h2>
        //     <h1 className="team-title"> {match.team2Goals}</h1>
        //   </div>
        // </div>
        
        : console.log("Not Here")}
      </div>
      <div className="side-by-side">

        <div className="top-to-bottom">
          <img className="matchTeamLogo"
          src={match2.logo1}
          alt={match2.team1}/>

          <h2 className = "team-title"> {match2.team1} </h2>
          <h1 className="team-title"> {match2.team1Goals}</h1>
        </div>

        <Divider orientation="vertical" flexItem>
          <h2 className="team-title"> Match Date: </h2>
          <h2 className="team-title"> {match2.date}</h2>


          <h2 className="team-title"> Referee: </h2>
          <h2 className="team-title"> {match2.referee}</h2>
        </Divider>

        <div className="top-to-bottom">
        <img className="matchTeamLogo"
          src={match2.logo2}
          alt={match2.team2}/>

          <h2 className = "team-title"> {match2.team2} </h2>
          <h1 className="team-title"> {match2.team2Goals}</h1>
        </div>

      </div>
    </div>
  );
} 