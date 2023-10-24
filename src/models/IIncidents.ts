import IUser from './IUsers';
import IIncidentStatuses from './IIncidentStatuses';

interface IIncidents {
	id?: number;
	description?: string;
	reportedDate?: Date | any;
	reportedBy?: IUser;
	acceptedBy?: IUser;
	resolved?: boolean;
	resolvedDate?: Date | any;
	statusId: IIncidentStatuses;
	workPlace: string;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}

export default IIncidents;
