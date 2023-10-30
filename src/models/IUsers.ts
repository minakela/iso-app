import IBaseEntity from './IBaseEntity';
import IRole from './IRole';

interface IUser extends IBaseEntity<number> {
	firstName: string;
	lastName: string;
	email: string;
	passwordHash: string;
	roleId: IRole;
}
export default IUser;
