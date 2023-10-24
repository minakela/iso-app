import IIncident from '../../models/IIncidents';

export default interface IIncidentService {
	createIncident: (incident: IIncident) => Promise<IIncident>;
	getIncident: (incidentId: number) => Promise<IIncident>;
	updateIncident: (incident: IIncident) => Promise<IIncident>;
	deleteIncident: (incidentId: number) => Promise<void>;
	getAllIncidents: () => Promise<IIncident[]>;
}
