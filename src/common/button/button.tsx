import React from 'react';
import IButton from './IButton';
import styleButton from './ButtonStyle.module.css';

const Button: React.FunctionComponent<IButton> = ({
	name,
	disabled,
	onClick,
}) => {
	return (
		<button onClick={onClick} style={styleButton} disabled={disabled}>
			{name}
		</button>
	);
};

export default Button;
