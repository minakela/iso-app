import IUser from './IUsers';
import IIncidentStatuses from './IIncidentStatuses';

interface IIncidents {
	id: number;
	serialNumber?: string;
	description?: string;
	reportedDate?: Date | any;
	reportedBy?: IUser;
	acceptedBy?: IUser;
	resolved?: boolean;
	resolvedDate?: Date | any;
	statusId: IIncidentStatuses;
	workPlace: string;
	modifiedBy: IUser;
	createdBy: IUser;
	deletedBy: IUser;
	isDeleted: boolean;
}

export default IIncidents;
