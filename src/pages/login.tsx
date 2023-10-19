import React, { useState } from 'react';
import IsoButton from '../common/button/isoButton';
import Input from '../common/input/Input';

const Login: React.FunctionComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="login">
			<Input
				name="email"
				type="input"
				value={email}
				placeholder="Enter your email"
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<Input
				name="Password"
				type="password"
				value={password}
				placeholder="Enter your password"
				onChange={(event) => {
					setPassword(event.target.value);
				}}
			/>
			<IsoButton
				name="Login"
				onClick={() => {
					console.log('login', email, password);
				}}
			/>
		</div>
	);
};

export default Login;
