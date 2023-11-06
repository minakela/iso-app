import IWorkPlace from '../../models/IWorkPlace';

export default interface IWorkPlaceService {
	getAllWorkPlaces: () => Promise<IWorkPlace[]>;
}
