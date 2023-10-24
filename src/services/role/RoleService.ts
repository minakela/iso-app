import IRole from '../../models/IRole';
import axios from 'axios';
import IRoleService from './IRoleService';

class RoleService implements IRoleService {
	api = `http://localhost:8000/role`;

	createRole = async (role: IRole): Promise<IRole> => {
		try {
			const response = await axios.post(this.api, role);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getRole = async (roleId: number): Promise<IRole> => {
		try {
			const response = await axios.get(`${this.api}/${roleId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateRole = async (role: IRole): Promise<IRole> => {
		try {
			const response = await axios.put(`${this.api}/${role.id}`, role);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteRole = async (roleId: number): Promise<void> => {
		try {
			await axios.delete(`${this.api}/${roleId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllRoles = async (): Promise<IRole[]> => {
		try {
			const response = await axios.get(`${this.api}`);
			console.log(response);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const roleService = new RoleService();

export default roleService;
