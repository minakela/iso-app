import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Header from './composite/header/Header';
import Home from './pages/Home';

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
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
