export default interface IInput {
	name: string;
	type: string;
	value?: string | number;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
