import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/loginPage/LoginPage';
import Header from './composite/header/Header';
import Home from './pages/homePage/HomePage';
import Footer from './composite/footer/Footer';
import IncidentsPage from './pages/incidentsPage/incidentsPage';
// import IncidentPage from './pages/incidentPage/incidentPage';
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
	return (
		<div className="App">
			<Header links={isLoginPage ? [] : links} />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/incidents" element={<IncidentsPage />} />
				{/* <Route path="/incident/:id" element={<IncidentPage />} /> */}
				<Route path="/incident-type" element={<IncidentTypePage />} />
				<Route path="/incident-status" element={<IncidentStatusPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
