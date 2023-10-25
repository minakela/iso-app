import IIncidentTypes from '../../models/IIncidentTypes';
import axios from 'axios';
import IIncidentTypesService from './IIncidentTypesService';

class IncidentTypesService implements IIncidentTypesService {
	api = `http://localhost:8000/incident-type`;

	createIncidentType = async (
		incidentType: IIncidentTypes
	): Promise<IIncidentTypes> => {
		try {
			const response = await axios.post(`${this.api}`, incidentType);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	getIncidentType = async (incidentTypeId: number): Promise<IIncidentTypes> => {
		try {
			const response = await axios.get(`${this.api}/${incidentTypeId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	updateIncidentType = async (
		incidentType: IIncidentTypes
	): Promise<IIncidentTypes> => {
		try {
			const response = await axios.put(
				`${this.api}/${incidentType.id}`,
				incidentType
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deleteIncidentType = async (incidentTypeId: number): Promise<void> => {
		try {
			await axios.delete(`${this.api}/${incidentTypeId}`);
		} catch (error) {
			throw error;
		}
	};

	getAllIncidentTypes = async (): Promise<IIncidentTypes[]> => {
		try {
			const response = await axios.get(`${this.api}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}

const incidentTypeService = new IncidentTypesService();

export default incidentTypeService;
