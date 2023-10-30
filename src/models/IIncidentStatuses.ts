import IBaseEntity from './IBaseEntity';

interface IIncidentStatuses extends IBaseEntity<number> {
	serialNumber: number | string;
	statusName: string;
}

export default IIncidentStatuses;
