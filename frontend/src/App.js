import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';
import NavBar from './components/navBar/navBar';
import Login from './routes/login/Login';

import './App.css';

function App() {
	const { user } = useContext(UserContext);
	return (
		<Routes>
			{user ? (
				// {!user ? (
				<Route index element={<Login />} />
			) : (
				<Route
					path="/"
					element={<NavBar />}
				>
					{/* <Route index element={<Fixture />} /> */}
					{/* <Route path="add_event" element={<AddEvent />} />
					<Route path="event_list" element={<EventList />} />
					<Route path="reported_users" element={<ReportedUsers />} />
					<Route path="change_password" element={<ChangePassword />} /> */}
				</Route>
			)}
		</Routes>
	);
}

export default App;
