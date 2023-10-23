import IUser from './IUsers';

interface IIncidents {
	id?: number;
	description?: string;
	reportedDate?: Date | any;
	reportedBy?: IUser;
	acceptedBy?: IUser;
	resolved?: boolean;
	resolvedDate?: Date | any;
	statusId: number;
	workPlace: string;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}

export default IIncidents;
