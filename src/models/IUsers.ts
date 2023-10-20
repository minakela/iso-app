import IRole from './IRole';

interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	passwordHash: string;
	roleId: IRole;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}
export default IRole;
