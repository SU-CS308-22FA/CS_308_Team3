import { useContext, useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import "./NotificationsPage.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotificationsPage() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

  const [notifications, setNotifications] = useState(null);

	useEffect(() => {
		axios
				.get("/notifications/list")
				.then((res) => {
						setNotifications(res.data.notifications);
				})
				.catch((err) => console.log(err));
}, []);

	return (
		<>
			{user && user.userType === "TFF" && (
                <div className="deleteNotificationButton">
                    <Button color="error" onClick={() => navigate("/notification-delete")}>
                        Delete Notification
                    </Button>
                </div>
      )}
			{user && user.userType === "TFF" && (
                <div className="addRefButton">
                    <Button onClick={() => navigate("/notification-add")}>
                        Add New Notification
                    </Button>
                </div>
      )}
			<div className="FAQ" style={{paddingTop: "30px"}}>
				<div>
					{notifications && notifications.map(({ NotificationHeader, NotificationContent }, index) => (
						<Accordion key={index.toString()}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography>{index + 1}-) {NotificationHeader}</Typography>
							</AccordionSummary>

							<AccordionDetails><Typography>{NotificationContent}</Typography></AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		</>
	);
}




