export default interface IDropdown {
	label: string;
	onChange: (value: number | undefined) => void;
	options: { value: number; label: string }[];
}
