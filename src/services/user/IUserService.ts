import IUser from '../../models/IUsers';

export default interface IUserService {
	createUser: (user: IUser) => Promise<IUser>;
	getUser: (userId: number) => Promise<IUser>;
	updateUser: (user: IUser) => Promise<IUser>;
	deleteUser: (userId: number) => Promise<void>;
	getAllUsers: () => Promise<IUser[]>;
}
