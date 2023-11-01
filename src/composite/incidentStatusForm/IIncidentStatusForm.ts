import IIncidentStatuses from '../../models/IIncidentStatuses';

export default interface IIncidentStatusForm {
	incidentStatus: IIncidentStatuses;
	onSave: (incident: IIncidentStatuses) => void;
}
