interface IButton {
	name: string;
	// disabled: boolean;
	action: () => void;
	isHidden: boolean;
}

export default IButton;
