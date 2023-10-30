export default interface IBaseEntity<T> {
	id: T;
	modifiedBy: number;
	createdBy: number;
	deletedBy: number;
	isDeleted: boolean;
}
