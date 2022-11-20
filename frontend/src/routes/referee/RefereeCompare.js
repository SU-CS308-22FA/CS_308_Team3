import { useEffect, useState } from "react";
import axios from "axios";

import "./referee.scss";
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

    const compareReferees = () => {}; //TODO

    return (
        <div>
            <div style={{width: "100vw", height: "100vh"}}>
                {referee1 && referee2 ? 
                <div className="side-by-side" style={{width: "100vw", height: "100vh", alignItems:"flex"}}>
                  <div>
                    <h2>{referee1.name}</h2>
                  </div>
                  
                  <Divider orientation="vertical" flexItem></Divider>

                  <div style={{justifyContent: "end", alignItems: "end", alignContent: "end", float: "right", clear: "right"}}>
                    <h2>{referee2.name}</h2>
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
