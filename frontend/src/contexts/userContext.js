import { createContext, useMemo, useState } from "react";


export const UserContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(sessionStorage.getItem("user") ?? null);

    const login = () => {
        
    };

    const logout = () => {

    };

    const value = useMemo(() => ({
        user,
        login,
        logout,
    }), [user, login, logout]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};