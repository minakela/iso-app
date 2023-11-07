import React, { useEffect, useRef, useState } from 'react';
import IModalProps from './IModalProps';
import css from './modalStyle.module.css';

const Modal: React.FunctionComponent<IModalProps> = ({
	isOpen,
	onClose,
	hasCloseBtn,
	children,
}) => {
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
	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	return (
		<div className={isModalOpen ? css['overlay'] : ''}>
			<dialog
				open={isModalOpen}
				ref={modalRef}
				onKeyDown={handleKeyDown}
				className={css['modal']}>
				{hasCloseBtn && (
					<button className={css['modal-close-btn']} onClick={handleCloseModal}>
						Close
					</button>
				)}
				{children}
			</dialog>
		</div>
	);
};

export default Modal;
