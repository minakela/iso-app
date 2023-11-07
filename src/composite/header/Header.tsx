import React from 'react';
import css from './header.module.css';
import IHeader from './IHeader';
import Link from '../../common/link/link';
import { useTranslation } from 'react-i18next';
import Button from '../../common/button/button';
import logout from '../../common/logout/logout';

const Header: React.FunctionComponent<IHeader> = ({ links, showLogout }) => {
	const linkStyle = {
		margin: '3px',
		textDecoration: 'none',
		color: '#7b0808',
	};

	const { t } = useTranslation('common');
	return (
		<div className={css['header-container']}>
			<div>
				<img src="/assets/img/TiacLogo.png" alt="TiacLogo" title="Tiac" />
				<h1>{t('header.h1')}</h1>
			</div>
			<ul>
				{links.map((link) => (
					<li key={link.label}>
						<Link to={link.href} style={linkStyle}>
							{link.label}
						</Link>
					</li>
				))}
				{showLogout && (
					<Button name={'Logout'} onClick={logout} style={linkStyle} />
				)}
			</ul>
		</div>
	);
};

export default Header;
