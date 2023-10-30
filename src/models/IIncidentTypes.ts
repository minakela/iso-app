import IBaseEntity from './IBaseEntity';

interface IIncidentTypes extends IBaseEntity<number> {
	serialNumber: number | string;
	name: string;
}
export default IIncidentTypes;
