import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { NotificationContext } from "../../contexts/notificationContext";

export default function Notification() {
    const { alert, setalert } = useContext(NotificationContext);

    const handleClose = () => {
        setalert({ open: false });
    };

    return (
        <Snackbar
            open={alert.open}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={alert.severity ?? "error"}
                sx={{ width: "100%" }}
                variant={"filled"}
                elevation={6}
            >
                {alert.message}
            </Alert>
        </Snackbar>
    );
}
