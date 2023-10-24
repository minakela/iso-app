import IIncidentTypes from '../../models/IIncidentTypes';
import axios from 'axios';

class IncidentTypesService {
	IncidentTypesService!: () => [];

	constructor() {
		this.IncidentTypesService();
	}

	createIncidentType = async (
		incidentType: IIncidentTypes
	): Promise<IIncidentTypes> => {
		try {
			const response = await axios.post(
				`${this.IncidentTypesService}/incident-type`,
				incidentType
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getIncidentType = async (incidentTypeId: number): Promise<IIncidentTypes> => {
		try {
			const response = await axios.get(
				`${this.IncidentTypesService}/incident-types/${incidentTypeId}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateIncidentType = async (
		incident: IIncidentTypes
	): Promise<IIncidentTypes> => {
		try {
			const response = await axios.put(
				`${this.IncidentTypesService}/incident-type/${incident.id}`,
				incident
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteIncidentType = async (incidentTypeId: number): Promise<void> => {
		try {
			await axios.delete(
				`${this.IncidentTypesService}/incident-type/${incidentTypeId}`
			);
		} catch (error) {
			throw error;
		}
	};

	getAllRoles = async (): Promise<IIncidentTypes[]> => {
		try {
			const response = await axios.get(
				`${this.IncidentTypesService}/incident-type`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const roleService = new IncidentTypesService();

export default IncidentTypesService;
