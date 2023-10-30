import IIncidentTypes from '../../models/IIncidentTypes';

export default interface IIncidentTypeForm {
	incidentType: IIncidentTypes;
	onSave: (incident: IIncidentTypes) => void;
}
