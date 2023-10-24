import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/loginPage/LoginPage';
import Header from './composite/header/Header';
import Home from './pages/homePage/HomePage';
import Footer from './composite/footer/Footer';
import IncidentsPage from './pages/incidentsPage/incidentsPage';
import IncidentPage from './pages/incidentPage/incidentPage';

const links = [
	{ href: '/login', label: 'Login' },
	{ href: '/home', label: 'Home' },
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
				<Route path="/incident/:id" element={<IncidentPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
