import IIncidentStatus from '../../models/IIncidentStatuses';
import axios from 'axios';
import IIncidentStatusService from './IIncidentStatusService';

class IncidentStatusService implements IIncidentStatusService {
	api = `http://localhost:8000/incident-status`;

	createIncidentStatus = async (
		incidentStatus: IIncidentStatus
	): Promise<IIncidentStatus> => {
		try {
			const response = await axios.post(`${this.api}/`, incidentStatus);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getIncidentStatus = async (
		incidentStatusId: number
	): Promise<IIncidentStatus> => {
		try {
			const response = await axios.get(`${this.api}/${incidentStatusId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateIncidentStatus = async (
		incidentStatus: IIncidentStatus
	): Promise<IIncidentStatus> => {
		try {
			const response = await axios.put(
				`${this.api}/${incidentStatus.id}`,
				incidentStatus
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteIncidentStatus = async (incidentStatusId: number): Promise<void> => {
		try {
			await axios.delete(`${this.api}/${incidentStatusId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllIncidentStatus = async (): Promise<IIncidentStatus[]> => {
		try {
			const response = await axios.get(`${this.api}/`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	getAllIncidentStatusesPerPage = async (
		limit: number,
		page: number
	): Promise<IIncidentStatus[]> => {
		try {
			const response = await axios.get(
				`${this.api}?_limit=${limit}&_page=${page}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const incidentStatusService = new IncidentStatusService();

export default incidentStatusService;
