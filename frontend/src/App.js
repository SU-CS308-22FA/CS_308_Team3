import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import NavBar from "./components/navBar/navBar";
import Login from "./routes/login/Login";

import "./connection";
import "./App.css";
import Profile from "./routes/profile/Profile";
import Fixture from "./routes/fixture/Fixture";
import ProfileWoLogin from "./routes/profile/ProfileWoLogin";

function App() {
    const { user } = useContext(UserContext);
    return (
        <BrowserRouter>
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
