import React from 'react';
import ILink from './ILink';
import { Link as ReactLink } from 'react-router-dom';

const Link: React.FunctionComponent<ILink> = ({ to, children }) => {
	return <ReactLink to={to}>{children}</ReactLink>;
};

export default Link;
