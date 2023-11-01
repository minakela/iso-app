import React, { useState } from 'react';
import Input from '../../common/input/Input';
import css from './loginStyle.module.css';
import { useTranslation } from 'react-i18next';
import Button from '../../common/button/button';
import authService from '../../services/auth/AuthService';
import { useNavigate } from 'react-router-dom';

const Login: React.FunctionComponent = () => {
	const { t } = useTranslation('common');
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = async () => {
		await authService.login({ email, password });
		navigate('/incidents');
	};

	return (
		<div className={css.login}>
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
			<Button name={t('button.login')} isHidden={false} onClick={login} />
		</div>
	);
};

export default Login;
