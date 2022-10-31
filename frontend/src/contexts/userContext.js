import axios from "axios";
import bcrypt from "bcryptjs";
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
                if (res.data.message === "Registration is succesful") {
                    console.log("");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

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
