import { useEffect, useState } from "react";
import "./TeamDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TeamDetails() {
    const [team, setTeam] = useState();
    var team_id = useParams().id;

    useEffect(() => {
        axios
            .get("/teams/" + team_id)
            .then((res) => {
                // console.log(res.data.team);
                setTeam(res.data.team);
                listPlayers(res.data.team.players);
                console.log(res.data.team.anthem);
            })
            .catch((err) => console.log(err));
    }, [team_id]);

    function createData(name) {
        return { name };
    }

    // var rows = listPlayers(team.players);

    function listPlayers(playerArray) {
        let rows = [];
        for (let i = 0; i < playerArray.length; i++) {
            rows.push(createData(playerArray[i]));
        }
        return rows;
    }

    return (
        <div className="fixture" style={{ width: "100%" }}>
            {team ? (
                <div style={{ width: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>{team.name}</h1>
                    <div className="side-by-side" style={{ paddingBottom: 20 }}>
                        <img
                            className="teamLogo"
                            src={team.image}
                            alt={team.alt}
                        />
                        <div
                            className="top-to-bottom"
                            style={{
                                lineHeight: "0px",
                            }}
                        >
                            <h3>
                                Team Manager:{" "}
                                <span style={{ fontWeight: "normal" }}>
                                    {team.manager}
                                </span>
                            </h3>
                            <h3>
                                Year of Establishment:{" "}
                                <span style={{ fontWeight: "normal" }}>
                                    {team.establishment}
                                </span>
                            </h3>
                            <h3>
                                Number of Trophies:{" "}
                                <span style={{ fontWeight: "normal" }}>
                                    {team.trophies}
                                </span>
                            </h3>
                            <h3>
                                Number of Fans:{" "}
                                <span style={{ fontWeight: "normal" }}>
                                    {team.fans}
                                </span>
                            </h3>
                            <h3>
                                Number of Players:{" "}
                                <span style={{ fontWeight: "normal" }}>
                                    {team.numPlayers}
                                </span>
                            </h3>
                        </div>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Player Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listPlayers(team.players).map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <div style={{width: "100%", paddingTop: "5vh"}}> */}
                    {/* <div className="side-by-side-TeamDetails" style= {{paddingTop: "5vh"}}> */}
                    {/* <div style={{justifyContent: "start", alignItems: "start", alignContent: "start", float: "left"}}>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 0000000€</span></h3>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 000€</span></h3>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 000€</span></h3>
                  </div>
                    
                    <Divider orientation="vertical" style={{float: "center"}} flexItem></Divider>

                  <div style={{justifyContent: "center", alignItems: "center", alignContent: "center", float: "right"}}>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 000€</span></h3>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 00000000000€</span></h3>
                    <h3>Market Value: <span style={{fontWeight: "normal",}}>100 000 000€</span></h3>
                  </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}
