import IIncidentStatuses from './IIncidentStatuses';
import IBaseEntity from './IBaseEntity';
import IUser from './IUsers';

interface IIncidents extends IBaseEntity<number> {
	serialNumber: string;
	description: string;
	reportedDate: Date | any;
	reportedBy: number;
	acceptedBy: number;
	resolved: boolean;
	resolvedDate: Date | any;
	statusId: number;
	workPlace: string;
}

export default IIncidents;
