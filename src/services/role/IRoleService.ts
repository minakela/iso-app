import IRole from '../../models/IRole';

export default interface IRoleService {
	createRole: (role: IRole) => Promise<IRole>;
	getRole: (roleId: number) => Promise<IRole>;
	updateRole: (role: IRole) => Promise<IRole>;
	deleteRole: (roleId: number) => Promise<void>;
	getAllRoles: () => Promise<IRole[]>;
}
