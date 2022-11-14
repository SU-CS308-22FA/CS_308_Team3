import "./matchDetails.css"
import axios from "axios"
import { useEffect, useState } from "react";
import "./matchDetails.css"


export function MatchDetails() {
  const [match, setMatch] = useState();

  useEffect(() => {
    axios
        .get("/match/get")
        .then((res) => {
            console.log(res.data.matchProperties);
            setMatch(res.data.matchProperties);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div>
      <h3>Match Details!</h3>
      <div className="WrapContainer">
        {match ? "Match don't exist" : match }
      </div>
    </div>
  );
} 