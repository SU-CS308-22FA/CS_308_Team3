import { useEffect, useState, useRef, useMemo } from "react";
import "./NotificationsPage.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserContext } from "../../contexts/userContext";

export default function NotificationsPage() {
	const { user } = useContext(UserContext);

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
			<div className="FAQ">
				<div>
					{notifications.map(({ NotificationHeader, NotificationContent }, index) => (
						<Accordion key={index.toString()}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography>Q{index + 1}-) {NotificationHeader}</Typography>
							</AccordionSummary>

							<AccordionDetails><Typography>{NotificationContent}</Typography></AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		</>
	);
}




