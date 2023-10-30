export default interface IButton {
	name: string;
	disabled?: boolean;
	style?: React.CSSProperties;
	onClick: () => void;
	isHidden?: boolean;
}
