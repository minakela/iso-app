interface IButton {
	name: string;
	disabled?: boolean;
	onClick: () => void;
	isHidden?: boolean;
}

export default IButton;
