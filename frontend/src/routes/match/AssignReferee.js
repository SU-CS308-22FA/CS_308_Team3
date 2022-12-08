import { Alert, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function AssignReferee({ matchId }) {

    const [referee, setReferee] = useState(null);
    const [status, setStatus] = useState(null);
    const [refereeList, setRefereeList] = useState(null);

    useEffect(() => {
        // reset values when matchId changes
        setReferee(null);
        setStatus(``);  
        setRefereeList(null);

        axios
        .get("/fixture/" + matchId + "/referee")
        .then((res) => {
            if (res.data.referee === "") res.data.referee = null;
            console.log(res.data);
            setReferee(res.data.referee);
            setRefereeList(res.data.list);
        })
        .catch((err) => {
            setStatus(["error", "An error occured"]);
        });

    }, [matchId]);
    
    const handleChangeReferee = useCallback((event) => {
        setStatus(["info", "Updating referee"]);
        
        let updatedValue = event.target.value;
        if (event.target.value === "delete") {
            updatedValue = null;
        }

        axios
        .put("/fixture/" + matchId + "/referee", {referee: updatedValue || ""})
        .then((res) => {
            console.log(res.data);
            setReferee(updatedValue);
            setStatus(null);
        })
        .catch((err) => {
            setStatus(["error", err.data]);
        });
        
    }, [matchId]);
    console.log(referee)

    if (refereeList === null) {
        return (
            <Alert severity="info">
                Loading referee info...
            </Alert>
        );
    }

    return (
        <Box className="AssignReferee" sx={{mx: "auto", maxWidth: "400px", mt: 5}}>
            { referee === null &&
                <Alert severity="info" sx={{my: 2}}>
                    Assign a referee to this game.
                </Alert>
            }
            { referee !== null &&
                <Alert severity="success" sx={{my: 2}}>
                    You assigned {referee} to this game.
                </Alert>
            }
            {
                status && 
                <Alert severity={status[0]} sx={{my: 2}}>
                    {status[1]}
                </Alert>
            }

            <FormControl fullWidth>
                <InputLabel id="match-assign-referee">Referee</InputLabel>
                <Select
                    labelId="match-assign-referee"
                    id="match-assign-referee"
                    value={referee || ""}
                    label="Referee"
                    onChange={handleChangeReferee}
                >
                    { referee && <MenuItem value="delete">Remove referee</MenuItem> }
                    {
                        refereeList.map(refereeOption =>
                            <MenuItem id={refereeOption} value={refereeOption}>{refereeOption}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default AssignReferee;