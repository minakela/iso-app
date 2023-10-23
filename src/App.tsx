import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login-page/LoginPage';
import Header from './composite/header/Header';
import Home from './pages/home-page/HomePage';
import Footer from './composite/footer/Footer';

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
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
