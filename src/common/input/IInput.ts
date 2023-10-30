export default interface IInput {
	name: string;
	type: string;
	value?: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
