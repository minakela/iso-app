export default interface IPaginator {
	currentPage: number;
	numOfPages: number;
	onPageChange: (page: number) => void;
}
