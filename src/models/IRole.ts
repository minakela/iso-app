interface IRole {
	id: number;
	roleName: string;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}

export default IRole;
