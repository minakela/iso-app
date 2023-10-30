import IIncidentStatuses from './IIncidentStatuses';
import IBaseEntity from './IBaseEntity';
import IUser from './IUsers';

interface IIncidents extends IBaseEntity<number> {
	serialNumber: string;
	description: string;
	reportedDate: Date | any;
	reportedBy: IUser;
	acceptedBy: IUser;
	resolved: boolean;
	resolvedDate: Date | any;
	statusId: IIncidentStatuses;
	workPlace: string;
}

export default IIncidents;
