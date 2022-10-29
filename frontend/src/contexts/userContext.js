import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

export const UserContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {};

    const logout = () => {};
    // useEffect(() => {
    //     setUser({ name: "Ege", surname: "Metin", age: 21, memberType: "Fan" });
    // }, []);
    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user, login, logout]
    );
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
