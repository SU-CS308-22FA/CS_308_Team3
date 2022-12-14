import axios from "axios";
//import bcrypt from "bcryptjs";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { NotificationContext } from "./notificationContext";

export const UserContext = createContext({
    user: null,
    updateUser: () => {},
    login: () => {},
    logout: () => {},
    resetUser: () => {},
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) ?? null
    );
    const { setalert } = useContext(NotificationContext);

    const updateUser = (newUser) => {
        setUser((oldUser) => ({ ...oldUser, ...newUser }));
    };

    const resetUser = useCallback(() => {
        setUser(null);
        sessionStorage.clear();
    }, []);

    const login = useCallback(async (email, password) => {
        // const salt = bcrypt.genSaltSync(10);
        // const hashedPassword = bcrypt.hashSync(password, salt);
        await axios
            .post("/users/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.message === "Login is succesful") {
                    setalert({
                        message: "Login is succesful",
                        severity: "success",
                    });
                    setUser(res.data.user);
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify(res.data.user)
                    );
                } else {
                    setalert({
                        message: "Your credentials are wrong!",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
            updateUser,
            resetUser,
        }),
        [user, login, logout]
    );
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
