import IWorkPlace from '../../models/IWorkPlace';
import IWorkPlaceService from './IWorkPlaceService';
import axios from 'axios';

class WorkPlaceService implements IWorkPlaceService {
	api = `http://localhost:8000/work-place`;

	getAllWorkPlaces = async (): Promise<IWorkPlace[]> => {
		try {
			const response = await axios.get(`${this.api}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
}
const workPlaceService = new WorkPlaceService();

export default workPlaceService;
