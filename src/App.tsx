import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/loginPage/LoginPage';
import Header from './composite/header/Header';
import Home from './pages/homePage/HomePage';
import Footer from './composite/footer/Footer';
import IncidentsPage from './pages/incidentsPage/incidentsPage';
import IncidentTypePage from './pages/incidentTypePage/incidentTypePage';
import IncidentStatusPage from './pages/incidentStatusPage/incidentStatusPage';

const links = [
	{ href: '/home', label: 'Home' },
	{ href: '/incidents', label: 'Incidents' },
	{ href: '/incident-type', label: 'Incident type' },
	{ href: '/incident-status', label: 'Incident status' },
];

function App() {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';

	const isLoggedIn = !!localStorage.getItem('token');
	return (
		<div className="App">
			<Header links={isLoginPage ? [] : links} isOnLoginPage={isLoginPage} />
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path="/incidents" element={<IncidentsPage />} />
						<Route path="/incident-type" element={<IncidentTypePage />} />
						<Route path="/incident-status" element={<IncidentStatusPage />} />
					</>
				) : (
					<Route path="*" element={<Login />} />
				)}
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
