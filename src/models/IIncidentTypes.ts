interface IIncidentTypes {
	id?: number;
	serialNumber: number;
	description: string;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}
export default IIncidentTypes;
