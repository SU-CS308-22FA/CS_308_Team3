import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import "./connection";
import "./App.scss";
import NavBar from "./components/navBar/navBar";
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
import Topratedmatch from "./routes/topratedmatch/Topratedmatch";
import NotificationAddTFF from "./routes/notification/NotificationAddTFF";
import NotificationsPage from "./routes/notification/NotificationsPage";
import NotificationDelete from "./routes/notification/NotificationDelete";
import MatchAdd from "./routes/fixture/MatchAdd";
import Scores from "./routes/scores/Scores";
import Favfixture from "./routes/favfixture/Favfixture";
import { Tracking } from "./routes/tracking/Tracking";
function App() {
    const { user } = useContext(UserContext);
    const { alert, setalert } = useContext(NotificationContext);
    return (
        <BrowserRouter>
            <Notification />
            <NavBar />
            <div className="pageContainer">
                <Routes>
                    <Route path="/" element={<Fixture />} />

                    {!user ? (
                        <>
                            <Route
                                path="profile"
                                element={<ProfileWoLogin />}
                            />
                        </>
                    ) : user.userType === "TFF" ? (
                        // TFF staff routes
                        <>
                            <Route path="profile" element={<Profile />} />
                            <Route
                                path="add-referee"
                                element={<RefereeAdd />}
                            />
                            <Route path="add-team" element={<TeamAdd />} />
                            <Route path="add-match" element={<MatchAdd />} />
                            <Route
                                path="changepassword"
                                element={<ChangePassword />}
                            />
                            <Route path="teams/:id" element={<TeamEdit />} />
                            <Route
                                path="notification-add"
                                element={<NotificationAddTFF />}
                            />
                            <Route
                                path="notification-delete"
                                element={<NotificationDelete />}
                            />

                        </>
                    ) : (
                        // normal user routes
                        <>
                            <Route path="profile" element={<Profile />} />
                            <Route
                                path="changepassword"
                                element={<ChangePassword />}
                            />
                        </>
                    )}
                    <Route path="teams" element={<Teams />} />
                    <Route path="teams/:id" element={<TeamDetails />} />
                    <Route
                        path="match-details/:id"
                        element={<MatchDetails />}
                    />
                    <Route path="faq" element={<FrequentlyAsked />} />
                    <Route path="referees" element={<RefereeTable />} />
                    <Route
                        path="referees/:name"
                        element={<RefereeDetails />}
                    />
                    <Route
                        path="topratedreferee"
                        element={<Topratedreferee />}
                    />
                    <Route
                        path="notifications"
                        element={<NotificationsPage />}
                    />
                    <Route
                        path="referee-compare/:id1/:id2"
                        element={<RefereeCompare />}
                    />
                    <Route path="topratedmatch" element={<Topratedmatch />} />
                    <Route
                        path="scores"
                        element={<Scores />}
                    />
                    <Route path="favfixture" element={<Favfixture />} />
                            <Route
                                path="tracking/:id"
                                element={<Tracking />}
                            />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "15rem" }}>
                                <h1>There's nothing here! Page Not Found</h1>
                            </main>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
