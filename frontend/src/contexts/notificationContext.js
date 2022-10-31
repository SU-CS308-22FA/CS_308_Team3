import { createContext, useCallback, useMemo, useState } from "react";

export const NotificationContext = createContext({
    alert: null,
    setalert: () => {},
});

export const NotificationProvider = ({ children }) => {
    const [alert, setAlert] = useState({ open: false, message: "" });

    const setalert = useCallback((newAlert) => {
        setAlert((oldAlert) => ({ ...oldAlert, ...newAlert }));
    }, []);

    const value = useMemo(
        () => ({
            alert,
            setalert,
        }),
        [alert, setalert]
    );
    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};
