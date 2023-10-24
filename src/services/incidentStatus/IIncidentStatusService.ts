import IIncidentStatus from '../../models/IIncidentStatuses';

export default interface IIncidentService {
	createIncidentStatus: (incident: IIncidentStatus) => Promise<IIncidentStatus>;
	getIncidentStatus: (incidentId: number) => Promise<IIncidentStatus>;
	updateIncidentStatus: (incident: IIncidentStatus) => Promise<IIncidentStatus>;
	deleteIncidentStatus: (incidentId: number) => Promise<void>;
	getAllIncidentStatus: () => Promise<IIncidentStatus[]>;
}
