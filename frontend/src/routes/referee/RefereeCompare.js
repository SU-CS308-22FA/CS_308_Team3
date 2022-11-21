import { useEffect, useState } from "react";
import axios from "axios";

import "./RefereeCompare.scss";
import {
    Button,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RefereeCompare() {
    const navigate = useNavigate();
    var referee_1_fullname = useParams().id1;
    var referee_2_fullname = useParams().id2;

    const [referees, setReferees] = useState();
    const [referee1, setReferee1] = useState();
    const [referee2, setReferee2] = useState();

    useEffect(() => {
        axios
            .get("/referees/" + referee_1_fullname + "/" + referee_2_fullname)
            .then((res) => {
                setReferees(res.data.referees);
                setReferee1(res.data.referees[0]);
                setReferee2(res.data.referees[1]);
            })
            .catch((err) => console.log(err));
    }, [referee_1_fullname, referee_2_fullname]);


    return (
        <div style={{display: "flex", width: "100vw", height: "100vh"}}>
            <div style={{display: "flex", width: "100vw", height: "100vh"}}>
                {referee1 && referee2 ? 
                <div className="side-by-side" style={{width: "100vw", height: "100vh"}}>
                  <div style={{marginLeft:"10vw"}}>
                  <h2>{referee1.name}</h2>
                    <img
                        src={referee1.image}
                        alt={referee1.name}
                        style={{
                            height: "30vh",
                            width: "auto",
                            marginBottom: "2vh",
                        }}
                    />
                    <h3>Age: <span style={{fontWeight: "normal",}}>{referee1.age}</span></h3>
                    <h3>Years of Experience: <span style={{fontWeight: "normal",}}>{referee1.exp}</span></h3>
                    <h3>License: <span style={{fontWeight: "normal",}}>{referee1.license}</span></h3>
                    <h3>Hometown: <span style={{fontWeight: "normal",}}>{referee1.hometown}</span></h3>
                    <h3>Score: <span style={{fontWeight: "normal",}}>{referee1.score}</span></h3>
                    <div className="lastMatchesContainer">
                      <p>Last 3 matches:</p>
                          <div className="lastMatches">
                              {referee1.last3Matches &&
                                  referee1.last3Matches.map(
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
                  
                  <Divider orientation="vertical" flexItem style={{paddingLeft: "12vw"}}></Divider>

                  <div style={{justifyContent: "center", alignItems: "center", alignContent: "center", paddingLeft: "10vw"}}>
                    <h2>{referee2.name}</h2>
                    <img
                        src={referee2.image}
                        alt={referee2.name}
                        style={{
                            height: "30vh",
                            width: "auto",
                            marginBottom: "2vh",
                        }}
                    />
                    <h3>Age: <span style={{fontWeight: "normal",}}>{referee2.age}</span></h3>
                    <h3>Years of Experience: <span style={{fontWeight: "normal",}}>{referee2.exp}</span></h3>
                    <h3>License: <span style={{fontWeight: "normal",}}>{referee2.license}</span></h3>
                    <h3>Hometown: <span style={{fontWeight: "normal",}}>{referee2.hometown}</span></h3>
                    <h3>Score: <span style={{fontWeight: "normal",}}>{referee2.score}</span></h3>
                    <div className="lastMatchesContainer">
                      <p>Last 3 matches:</p>
                          <div className="lastMatches">
                              {referee2.last3Matches &&
                                  referee2.last3Matches.map(
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
                </div>
                :
                <div>
                  Loading
                </div>}
            </div>
        </div>
    );
}
