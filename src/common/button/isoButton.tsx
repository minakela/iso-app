import React from 'react';
import IButton from './IButton';
import styleButton from './ButtonStyle.module.css';

const IsoButton: React.FunctionComponent<IButton> = (prop) => {
	return (
		<button onClick={prop.onClick} style={styleButton} disabled={prop.disabled}>
			{prop.name}
		</button>
	);
};

export default IsoButton;
