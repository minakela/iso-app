import React from 'react';
import Modal from '../../composite/dialogBox/Modal';

const Home: React.FunctionComponent = () => {
	return (
		<div>
			<Modal isOpen={true} hasCloseBtn={true}>
				Ovo je children
			</Modal>
		</div>
	);
};

export default Home;
