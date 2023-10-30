import IBaseEntity from './IBaseEntity';

interface IIncidentStatuses extends IBaseEntity<number> {
	serialNumber: number;
	statusName: string;
}

export default IIncidentStatuses;
