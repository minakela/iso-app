import IIncidentTypes from '../../models/IIncidentTypes';

export default interface IIncidentTypeService {
	createIncidentType: (incidentType: IIncidentTypes) => Promise<IIncidentTypes>;
	getIncidentType: (incidentTypeId: number) => Promise<IIncidentTypes>;
	updateIncidentType: (incident: IIncidentTypes) => Promise<IIncidentTypes>;
	deleteIncidentType: (incidentTypeId: number) => Promise<void>;
	getAllIncidentTypes: () => Promise<IIncidentTypes[]>;
}
