import IBaseEntity from './IBaseEntity';

interface IIncidentTypes extends IBaseEntity<number> {
	serialNumber: number;
	description: string;
}
export default IIncidentTypes;
