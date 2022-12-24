import { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./NotificationDelete.scss";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function NotificationDelete() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [notifications, setNotifications] = useState(null);
  const [notification1, setNotification1] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
		axios
				.get("/notifications/list")
				.then((res) => {
						setNotifications(res.data.notifications);
				})
				.catch((err) => console.log(err));
}, []);

  const deleteNotification = (notification1) => {
      setStatus(["info", "Deleting notification..."]);
      axios.delete("/notifications/" + notification1).then((res) => {
          window.location.href = "/notifications";
      }).catch((res) => {
          const message = res.data;
          setStatus(["error", message]);
      });
  
  };
  return (
      <div>
          <h3>Delete Notification</h3>
          <div className="deleteNotification">
              <FormControl sx={{ m: 1, width: 500 }}>
                <InputLabel id="not1-label">Notification</InputLabel>
                <Select
                    labelId="not1-label"
                    id="not1-header"
                    value={notification1}
                    onChange={(e) => setNotification1(e.target.value)}
                    input={<OutlinedInput label="Notification1" />}
                    // MenuProps={MenuProps}
                >
                    {notifications &&
                        notifications.map(({ NotificationHeader }, index) => (
                            <MenuItem
                                key={index}
                                value={NotificationHeader}
                                // style={getStyles(name, personName, theme)}
                            >
                                {NotificationHeader}
                            </MenuItem>
                        ))}
                </Select>
              </FormControl>
              <Button color="error" onClick={() => deleteNotification(notification1)} style={{width: 200, marginTop: 20}}>
                  Delete Notification
              </Button>
          </div>
      </div>
  );
}
