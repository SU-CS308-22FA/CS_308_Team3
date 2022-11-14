import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import NavBar from "./components/navBar/navBar";
import Login from "./routes/login/Login";

import "./connection";
import "./App.scss";
import Profile from "./routes/profile/Profile";
import Teams from "./routes/team/Teams";
import Fixture from "./routes/fixture/Fixture";
import ProfileWoLogin from "./routes/profile/ProfileWoLogin";
import Notification from "./components/notification/Notification";
import { NotificationContext } from "./contexts/notificationContext";
import ChangePassword from "./routes/profile/ChangePassword";
import { MatchDetails } from "./routes/match/matchDetails";

function App() {
    const { user } = useContext(UserContext);
    const { alert, setalert } = useContext(NotificationContext);
    return (
        <BrowserRouter>
            <Notification />
            <NavBar />
            <div className="pageContainer">
                <Routes>
                    {!user ? (
                        <>
                            <Route path="/" element={<Fixture />} />
                            <Route
                                path="profile"
                                element={<ProfileWoLogin />}
                            />
                            <Route path="teams" element={<Teams />} />
                            <Route path="match-details" element={<MatchDetails />} />
                            {/* <Route path="referees" element={<Referees />} /> */}
                            {/* Temporarily here for development */}
                            {/* <Route path="userprofile" element={<Profile />} />
                            <Route path="changepassword" element={<ChangePassword />} /> */}

                            {/* TODO */}
                            {/* <Route path="*" element={<ErrorPage />} /> */}
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "15rem" }}>
                                        <h1>
                                            There's nothing here! Page Not Found
                                        </h1>
                                    </main>
                                }
                            />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Fixture />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="teams" element={<Teams />} />
                            {/* <Route path="referees" element={<Referees />} /> */}
                            <Route
                                path="changepassword"
                                element={<ChangePassword />}
                            />

                            <Route path="match-details" element={<MatchDetails />} />

                            {/* TODO */}
                            {/* <Route path="*" element={<ErrorPage />} /> */}
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "15rem" }}>
                                        <h1>
                                            There's nothing here! Page Not Found
                                        </h1>
                                    </main>
                                }
                            />
                        </>
                    )}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

// {!user ? (
// <Route path="/" element={<Fixture />}>
//     {/* <Route index element={<Fixture />} /> */}
//     <Route path="profile" element={<Login />} />
//     {/* <Route index element={<Fixture />} /> */}

//     {/* TODO */}
//     {/* <Route path="*" element={<ErrorPage />} /> */}
//     <Route
//         path="*"
//         element={
//             <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//             </main>
//         }
//     />
// </Route>
