import IIncidentStatus from '../../models/IIncidentStatuses';
import axios from 'axios';

class IncidentStatusService {
	IncidentStatusService!: () => [];

	constructor() {
		this.IncidentStatusService();
	}

	createIncidentStatus = async (
		incidentStatus: IIncidentStatus
	): Promise<IIncidentStatus> => {
		try {
			const response = await axios.post(
				`${this.IncidentStatusService}/incident-status`,
				incidentStatus
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getIncidentStatus = async (
		incidentStatusId: number
	): Promise<IIncidentStatus> => {
		try {
			const response = await axios.get(
				`${this.IncidentStatusService}/incident-status/${incidentStatusId}`
			);
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
				`${this.IncidentStatusService}/incident-status/${incidentStatus.id}`,
				incidentStatus
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteIncidentStatus = async (incidentStatusId: number): Promise<void> => {
		try {
			await axios.delete(
				`${this.IncidentStatusService}/incident-status/${incidentStatusId}`
			);
		} catch (error) {
			throw error;
		}
	};

	getAllIncidentStatus = async (): Promise<IIncidentStatus[]> => {
		try {
			const response = await axios.get(
				`${this.IncidentStatusService}/incident-status`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const roleService = new IncidentStatusService();

export default IncidentStatusService;
