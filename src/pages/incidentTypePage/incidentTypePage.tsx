import React, { useEffect, useState } from 'react';
import incidentTypeService from '../../services/incidentTypes/IncidentTypesService';
import IIncidentTypes from '../../models/IIncidentTypes';
import { useTranslation } from 'react-i18next';
import Pagination from '../../composite/paginator/paginator';
import css from '../incidentsPage/incidentsPage.module.css';
import Button from '../../common/button/button';

const IncidentTypePage = () => {
	const { t } = useTranslation('common');
	const [incidentType, setIncidentType] = useState<IIncidentTypes[]>([]);
	const [numOfPages, setNumOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const perPage = 5;

	const getAllIncidentTypesPerPage = async () => {
		const data = await incidentTypeService.getAllIncidentTypesPerPage(
			perPage,
			currentPage
		);
		setIncidentType(data);
	};
	useEffect(() => {
		getAllIncidentTypesPerPage();
	}, [currentPage]);

	const getAllIncidentTypes = async () => {
		const data = await incidentTypeService.getAllIncidentTypes();
		setNumOfPages(Math.round(data.length / perPage));
	};
	useEffect(() => {
		getAllIncidentTypes();
	}, []);
	const editIncidentType = (id: number) => {};
	const deleteIncidentType = async (id: number) => {
		const response = await incidentTypeService.deleteIncidentType(id);
	};
	return (
		<div className={css['page-container']}>
			<table className="table">
				<tbody>
					<tr>
						<th>{t('incidentType.id')}</th>
						<th>{t('incidentType.name')}</th>
						<th>{t('incidentType.edit')}</th>
						<th>{t('incidentType.delete')}</th>
					</tr>
					{incidentType.map((incidentType) => (
						<tr key={incidentType.id}>
							<td>{incidentType.serialNumber}</td>
							<td>{incidentType.description}</td>
							<td>
								<Button
									name={t('button.edit')}
									onClick={() => editIncidentType(incidentType.id)}
								/>
							</td>
							<td>
								<Button
									name={t('button.delete')}
									onClick={() => deleteIncidentType(incidentType.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<Pagination
					currentPage={currentPage}
					numOfPages={numOfPages}
					onPageChange={(newPage) => setCurrentPage(newPage)}
				/>
			</div>
		</div>
	);
};

export default IncidentTypePage;
