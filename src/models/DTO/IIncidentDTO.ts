import IBaseEntity from '../IBaseEntity';

export default interface IIncidentsDTO {
	id?: number;
	modifiedBy?: number;
	createdBy?: number;
	deletedBy?: number;
	isDeleted?: boolean;
	serialNumber?: string;
	description?: string;
	reportedDate?: Date | string;
	reportedBy?: number;
	acceptedBy?: number;
	resolved?: boolean;
	resolvedDate?: Date | string;
	statusId?: number;
	workPlace?: string;
}
