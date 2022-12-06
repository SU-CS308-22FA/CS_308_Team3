import { Alert, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";

function AssignReferee({ matchId }) {

    const [referee, setReferee] = useState(null);
    const [status, setStatus] = useState(null);
    const [refereeList, setRefereeList] = useState(null);

    useEffect(() => {
        // reset values when matchId changes
        setReferee(null);
        setStatus(null);  
        setRefereeList(null);

        // load values
        setRefereeList(["Arda Kardesler", "Volkan Bayarslan", "Yasar Kemal"])
    }, [matchId]);
    
    const handleChangeReferee = useCallback((event) => {
        // add axios blah blah

        if (event.target.value == "delete") {
            setReferee(null);
            // axios blah
            return;
        }

        // demo code
        setReferee(event.target.value);
    }, [matchId]);
    console.log(referee)

    if (refereeList == null) {
        return (
            <Alert severity="info">
                Loading referee info...
            </Alert>
        );
    }

    return (
        <Box className="AssignReferee" sx={{mx: "auto", maxWidth: "400px", mt: 5}}>
            { referee == null &&
                <Alert severity="info" sx={{my: 2}}>
                    Assign a referee to this game.
                </Alert>
            }
            { referee != null &&
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
                    value={referee}
                    label="Referee"
                    onChange={handleChangeReferee}
                >
                    {
                        refereeList.map(refereeOption =>
                            <MenuItem value={refereeOption}>{refereeOption}</MenuItem>
                        )
                    }
                    { referee && <MenuItem value="delete">Remove referee</MenuItem> }
                </Select>
            </FormControl>
        </Box>
    );
}

export default AssignReferee;