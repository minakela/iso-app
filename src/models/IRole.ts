import IBaseEntity from './IBaseEntity';

interface IRole extends IBaseEntity<number> {
	roleName: string;
}

export default IRole;
