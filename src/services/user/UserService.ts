import IUser from '../../models/IUsers';
import axios from 'axios';

class UserService {
	UserService!: () => [];

	constructor() {
		this.UserService();
	}

	createUser = async (user: IUser): Promise<IUser> => {
		try {
			const response = await axios.post(`${this.UserService}/user`, user);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getUser = async (userId: number): Promise<IUser> => {
		try {
			const response = await axios.get(`${this.UserService}/users/${userId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateRole = async (user: IUser): Promise<IUser> => {
		try {
			const response = await axios.put(
				`${this.UserService}/users/${user.id}`,
				user
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteUser = async (userId: number): Promise<void> => {
		try {
			await axios.delete(`${this.UserService}/users/${userId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllUsers = async (): Promise<IUser[]> => {
		try {
			const response = await axios.get(`${this.UserService}/users`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const roleService = new UserService();

export default UserService;
