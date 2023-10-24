import IUser from '../../models/IUsers';
import axios from 'axios';
import IUserService from './IUserService';

class UserService implements IUserService {
	api = `http://localhost:8000/user`;
	createUser = async (user: IUser): Promise<IUser> => {
		try {
			const response = await axios.post(`${this.api}`, user);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getUser = async (userId: number): Promise<IUser> => {
		try {
			const response = await axios.get(`${this.api}/${userId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateUser = async (user: IUser): Promise<IUser> => {
		try {
			const response = await axios.put(`${this.api}/${user.id}`, user);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteUser = async (userId: number): Promise<void> => {
		try {
			await axios.delete(`${this.api}/${userId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllUsers = async (): Promise<IUser[]> => {
		try {
			const response = await axios.get(`${this.api}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const userService = new UserService();

export default userService;
