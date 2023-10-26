interface IIncidentStatuses {
	id: number;
	serialNumber: number;
	statusName: string;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}

export default IIncidentStatuses;
