import React from 'react';
import css from './header.module.css';
import IHeader from './IHeader';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent<IHeader> = ({ links }) => {
	const linkStyle = {
		margin: '3px',
		textDecoration: 'none',
		color: '#7b0808',
	};
	return (
		<div className={css.container}>
			<img src="/assets/img/TiacLogo.png" alt="TiacLogo" title="Tiac" />
			<ul>
				{links.map((link) => (
					<li key={link.label}>
						<Link to={link.href} style={linkStyle}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Header;
