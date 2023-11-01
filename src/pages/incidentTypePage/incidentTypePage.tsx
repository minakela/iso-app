import React, { useEffect, useState } from 'react';
import incidentTypeService from '../../services/incidentTypes/IncidentTypesService';
import IIncidentTypes from '../../models/IIncidentTypes';
import { useTranslation } from 'react-i18next';
import Pagination from '../../composite/paginator/paginator';
import css from '../incidentsPage/incidentsPage.module.css';
import Button from '../../common/button/button';
import Modal from '../../composite/dialogBox/Modal';
import IncidentTypeForm from '../../composite/incidentTypeForm/incidentTypeForm';

const IncidentTypePage = () => {
	const { t } = useTranslation('common');
	const [incidentType, setIncidentType] = useState<IIncidentTypes[]>([]);
	const [numOfPages, setNumOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const perPage = 5;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [incident, setIncident] = useState<IIncidentTypes>();

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
	const editIncidentType = async (id: number) => {
		setIsModalOpen(true);
		const getIncident = await incidentTypeService.getIncidentType(id);
		setIncident(getIncident);
	};
	const deleteIncidentType = async (id: number) => {
		// const response =
		await incidentTypeService.deleteIncidentType(id);
	};
	const onIncidentEdit = async (incident: IIncidentTypes) => {
		await incidentTypeService.updateIncidentType(incident);
		setIsModalOpen(false);
		setIncident(undefined);
	};
	return (
		<div className={css['page-container']}>
			<table className="table">
				<tbody>
					<tr>
						<th>{t('incidentType.serialNumber')}</th>
						<th>{t('incidentType.name')}</th>
						<th>{t('incidentType.edit')}</th>
						<th>{t('incidentType.delete')}</th>
					</tr>
					{incidentType.map((incidentType) => (
						<tr key={incidentType.id}>
							<td>{incidentType.serialNumber}</td>
							<td>{incidentType.name}</td>
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
			<Modal
				isOpen={isModalOpen}
				hasCloseBtn={true}
				onClose={() => setIsModalOpen(false)}>
				{incident && (
					<IncidentTypeForm incidentType={incident} onSave={onIncidentEdit} />
				)}
			</Modal>
		</div>
	);
};

export default IncidentTypePage;
