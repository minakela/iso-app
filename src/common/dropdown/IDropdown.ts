export default interface IDropdown {
	label: string;
	value: string | any;
	onChange: (value: string) => void;
	options: { value: string; label: string }[];
}
