import axios from 'axios';
import IAuthService from './IAuthService';

class AuthService implements IAuthService {
	api = `http://localhost:8000/login`;

	login = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}): Promise<string> => {
		try {
			const response = await axios.post(`${this.api}`, { email, password });
			console.log(response);

			const token = response.data.accessToken;
			localStorage.setItem('token', token);
			localStorage.setItem('user', response.data.user.id);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const authService = new AuthService();

export default authService;
