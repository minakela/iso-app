import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import IIncidents from '../../models/IIncidents';

export default interface IIncidentForm {
	incident: IIncidents;
	onSave: (incident: IIncidentsDTO) => void;
}
