import React from 'react';
import IsoButton from '../../common/button/button';
import IPaginator from './IPaginator';

const Pagination: React.FC<IPaginator> = ({
	currentPage,
	numOfPages,
	onPageChange,
}) => {
	const buttons = [];
	for (let i = 0; i < numOfPages; i++) {
		buttons.push(
			<IsoButton
				key={i}
				name={`${i + 1}`}
				onClick={() => onPageChange(i + 1)}
			/>
		);
	}

	return <div>{buttons}</div>;
};

export default Pagination;
