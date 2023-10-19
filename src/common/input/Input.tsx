import React from 'react';
import IInput from './IInput';
import styles from './Input.module.css';
const Input: React.FunctionComponent<IInput> = ({
	name,
	type,
	value = '',
	placeholder = '',
	onChange,
}) => {
	return (
		<div className="input-container">
			<span>{name}</span>
			<input
				type={type}
				className={styles['input']}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
