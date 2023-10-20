import React from 'react';
import css from './footer.module.css';

const Footer: React.FunctionComponent = () => {
	return (
		<div className={css.footerContainer}>
			<p>
				TIAC DOO | Industrijska 3b | 21000 | Novi Sad | Serbia | © Copyright
				2023 TIAC
			</p>
		</div>
	);
};

export default Footer;
