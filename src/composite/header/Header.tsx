import React from 'react';
import css from './header.module.css';
import IHeader from './IHeader';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent<IHeader> = ({ links }) => {
	return (
		<div className={css.container}>
			<img
				src="/assets/img/TiacLogo.png"
				alt="TiacLogo"
				title="Tiac"
				height={'100px'}
				width={'100px'}
			/>
			<ul>
				{links.map((link) => (
					<li key={link.label}>
						<Link to={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Header;
