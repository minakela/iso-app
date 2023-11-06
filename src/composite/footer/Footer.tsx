import React from 'react';
import css from './footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FunctionComponent = () => {
	const { t } = useTranslation('common');
	return (
		<div className={css['footer-container']}>
			<p>{t('footer.text')}</p>
		</div>
	);
};
export default Footer;
