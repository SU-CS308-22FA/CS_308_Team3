import { useEffect, useState } from "react";
import "./Scores.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Scores() {
    const [scores, setScores] = useState();

    useEffect(() => {
        axios
            .get("/scores/list")
            .then((res) => {
                // console.log(res.data.team);
                setScores(res.data.scores);
                listScores(res.data.scores);
                console.log(res.data.scores);
            })
            .catch((err) => console.log(err));
    }, []);

    function createData(name, O, G, B, M, AG, YG, AV, P) {
        return { name, O, G, B, M, AG, YG, AV, P };
    }

    function listScores(scoresArray) {
        let rows = [];
        for (let i = 0; i < scoresArray.length; i++) {
            rows.push(createData(scoresArray[i].name, scoresArray[i].O,
              scoresArray[i].G,
              scoresArray[i].B,
              scoresArray[i].M,
              scoresArray[i].AG,
              scoresArray[i].YG,
              scoresArray[i].AV,
              scoresArray[i].P,));
        }
        return rows;
    }

    return (
        <div className="fixture" style={{ width: "100%", marginBottom: "3vh" }}>
            {scores ? (
                <div style={{ width: "100%" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                <TableCell>Team</TableCell>
                                <TableCell align="right">O</TableCell>
                                <TableCell align="right">G</TableCell>
                                <TableCell align="right">B</TableCell>
                                <TableCell align="right">M</TableCell>
                                <TableCell align="right">AG</TableCell>
                                <TableCell align="right">YG</TableCell>
                                <TableCell align="right">AV</TableCell>
                                <TableCell align="right">P</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listScores(scores).map((row) => (
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
                                        <TableCell align="right">{row.O}</TableCell>
                                        <TableCell align="right">{row.G}</TableCell>
                                        <TableCell align="right">{row.B}</TableCell>
                                        <TableCell align="right">{row.M}</TableCell>
                                        <TableCell align="right">{row.AG}</TableCell>
                                        <TableCell align="right">{row.YG}</TableCell>
                                        <TableCell align="right">{row.AV}</TableCell>
                                        <TableCell align="right">{row.P}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}
