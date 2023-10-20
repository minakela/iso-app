interface IModalProps {
	isOpen: boolean;
	hasCloseBtn?: boolean;
	onClose?: () => void;
	children: React.ReactNode;
}
export default IModalProps;
