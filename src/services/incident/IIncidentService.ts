import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import IIncident from '../../models/IIncidents';

export default interface IIncidentService {
	createIncident: (incident: IIncident) => Promise<IIncident>;
	getIncident: (incidentId: number) => Promise<IIncident>;
	updateIncident: (incident: IIncidentsDTO) => Promise<IIncident>;
	deleteIncident: (incidentId: number) => Promise<void>;
	getAllIncidents: () => Promise<IIncident[]>;
	getAllIncidentsPerPage: (limit: number, page: number) => Promise<IIncident[]>;
}
