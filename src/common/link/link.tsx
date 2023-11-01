import React from 'react';
import ILink from './ILink';
import { Link as ReactLink } from 'react-router-dom';

const Link: React.FunctionComponent<ILink> = ({ to, children, style }) => {
	return (
		<ReactLink to={to} style={style} onClick={() => {}}>
			{children}
		</ReactLink>
	);
};

export default Link;
