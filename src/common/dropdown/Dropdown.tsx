import React from 'react';
import IDropdown from './IDropdown';
import css from './DropdownStyle.module.css';

const Dropdown: React.FunctionComponent<IDropdown> = ({
	label,
	onChange,
	options,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(parseInt(event.target.value));
	};
	return (
		<div className={css['footer-container']}>
			<label>{label}</label>
			<select onChange={handleChange}>
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
