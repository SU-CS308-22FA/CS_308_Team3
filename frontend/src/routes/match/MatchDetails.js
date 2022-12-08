import axios from "axios"
import { useContext, useEffect, useState} from "react";
import "./MatchDetails.css"
import { Divider,
  Avatar,
  Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import AssignReferee from "./AssignReferee";



export function MatchDetails() {
  const [match, setMatch] = useState();
  var match_id = useParams().id;

  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
        .get("/fixture/" + match_id)
        .then((res) => {
            console.log(res.data.match);
            setMatch(res.data.match);
        })
        .catch((err) => console.log(err));
  }, [match_id]);

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
            <img className="matchTeamLogo"
                src={match.logo2}
                alt={match.team2}/>

              <h1 className = "team-title"> {match.team2} </h1>
              <h2 className="team-title"> {match.team2Coach}</h2>
            </div>
          </div>

          { user && user.userType == "TFF" && <AssignReferee matchId={match_id}/> }
        </div>
        : <div> Loading... </div>}
    </div>
  );
} 