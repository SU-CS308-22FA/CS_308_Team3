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
import RefereeAdd from "./routes/referee/RefereeAdd";
import RefereeDetails from "./routes/referee/RefereeDetails";
import RefereeTable from "./routes/referee/RefereeTable";
import { MatchDetails } from "./routes/match/MatchDetails";
import TeamDetails from "./routes/team/TeamDetails";
import RefereeCompare from "./routes/referee/RefereeCompare";
import TeamEdit from "./routes/team/TeamEdit";
import TeamAdd from "./routes/team/TeamAdd";
import FrequentlyAsked from "./routes/faq/FrequentlyAsked";
import Topratedreferee from "./routes/topratedreferee/Topratedreferee";

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
                            <Route path="referees" element={<RefereeTable />} />
                            <Route
                                path="referees/:name"
                                element={<RefereeDetails />}
                            />
                            <Route
                                path="match-details/:id"
                                element={<MatchDetails />}
                            />
                            <Route path="teams/:id" element={<TeamDetails />} />
                            <Route
                                path="referee-compare/:id1/:id2"
                                element={<RefereeCompare />}
                            />
                        </>
                    ) : user.userType === "TFF" ? (
                        // TFF staff routes
                        <>
                            <Route path="/" element={<Fixture />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="teams" element={<Teams />} />
                            <Route path="referees" element={<RefereeTable />} />
                            <Route
                                path="referees/:name"
                                element={<RefereeDetails />}
                            />
                            <Route
                                path="add-referee"
                                element={<RefereeAdd />}
                            />
                            <Route path="add-team" element={<TeamAdd />} />
                            <Route
                                path="changepassword"
                                element={<ChangePassword />}
                            />
                            <Route
                                path="match-details/:id"
                                element={<MatchDetails />}
                            />
                            <Route path="teams/:id" element={<TeamEdit />} />
                            <Route
                                path="referee-compare/:id1/:id2"
                                element={<RefereeCompare />}
                            />
                        </>
                    ) : (
                        // normal user routes
                        <>
                            <Route path="/" element={<Fixture />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="teams" element={<Teams />} />
                            <Route path="referees" element={<RefereeTable />} />
                            <Route
                                path="referees/:name"
                                element={<RefereeDetails />}
                            />
                            <Route
                                path="changepassword"
                                element={<ChangePassword />}
                            />

                            <Route
                                path="match-details/:id"
                                element={<MatchDetails />}
                            />
                            <Route path="teams/:id" element={<TeamDetails />} />
                            <Route
                                path="referee-compare/:id1/:id2"
                                element={<RefereeCompare />}
                            />

                        </>
                    )}
                    <Route
                        path="faq"
                        element={<FrequentlyAsked />}
                    />
                    
                    <Route
                        path="topratedreferee"
                        element={<Topratedreferee />}
                    />
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

