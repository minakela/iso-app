import IIncident from '../../models/IIncidents';
import axios from 'axios';
import IIncidentService from './IIncidentService';
import IIncidentsDTO from '../../models/DTO/IIncidentDTO';

class IncidentService implements IIncidentService {
	api = `http://localhost:8000/incident`;

	createIncident = async (incident: IIncident): Promise<IIncident> => {
		try {
			const response = await axios.post(`${this.api}`, incident);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	getIncident = async (incidentId: number): Promise<IIncident> => {
		try {
			const response = await axios.get(`${this.api}/${incidentId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	updateIncident = async (incident: IIncidentsDTO): Promise<IIncident> => {
		try {
			const response = await axios.put(`${this.api}/${incident.id}`, incident);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteIncident = async (incidentId: number): Promise<void> => {
		try {
			await axios.delete(`${this.api}/${incidentId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllIncidentsPerPage = async (
		limit: number,
		page: number
	): Promise<IIncident[]> => {
		try {
			const response = await axios.get(
				`${this.api}?_limit=${limit}&_page=${page}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getAllIncidents = async (): Promise<IIncident[]> => {
		try {
			const response = await axios.get(`${this.api}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const incidentService = new IncidentService();

export default incidentService;
