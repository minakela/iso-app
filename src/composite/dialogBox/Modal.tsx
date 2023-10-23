import React, { useEffect, useRef, useState } from 'react';
import IModalProps from './IModalProps';

const Modal: React.FunctionComponent<IModalProps> = ({
	isOpen,
	hasCloseBtn,
	onClose,
	children,
}) => {
	useEffect(() => {
		setModalOpen(isOpen);
		console.log('open');
	}, [isOpen]);
	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
		setModalOpen(false);
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === 'Escape') {
			handleCloseModal();
		}
	};
	const [isModalOpen, setModalOpen] = useState(isOpen);
	const modalRef = useRef<HTMLDialogElement | null>(null);

	return (
		<dialog open={isModalOpen} ref={modalRef} onKeyDown={handleKeyDown}>
			{hasCloseBtn && (
				<button className="modal-close-btn" onClick={handleCloseModal}>
					Close
				</button>
			)}
			{children}
		</dialog>
	);
};

export default Modal;
