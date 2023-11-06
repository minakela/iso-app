import React from 'react';
import IDropdown from './IDropdown';
import css from './DropdownStyle.module.css';

const Dropdown: React.FunctionComponent<IDropdown> = ({
	label,
	value,
	onChange,
	options,
}) => {
	return (
		<div className={css.dropdown}>
			<label>{label}</label>
			<select
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
