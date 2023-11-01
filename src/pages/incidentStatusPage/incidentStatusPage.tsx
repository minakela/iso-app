import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IIncidentStatuses from '../../models/IIncidentStatuses';
import incidentStatusService from '../../services/incidentStatus/IncidentStatusService';
import Pagination from '../../composite/paginator/paginator';
import css from '../incidentsPage/incidentsPage.module.css';
import Button from '../../common/button/button';
import Modal from '../../composite/dialogBox/Modal';
import IncidentStatusForm from '../../composite/incidentStatusForm/incidentStatusForm';

const IncidentStatusPage = () => {
	const { t } = useTranslation('common');
	const [incidentStatus, setIncidentStatus] = useState<IIncidentStatuses[]>([]);
	const [numOfPages, setNumOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const perPage = 5;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [incident, setIncident] = useState<IIncidentStatuses>();

	const getAllIncidentStatusesPerPage = async () => {
		const data = await incidentStatusService.getAllIncidentStatusesPerPage(
			perPage,
			currentPage
		);
		setIncidentStatus(data);
	};

	useEffect(() => {
		getAllIncidentStatusesPerPage();
	}, [currentPage]);

	const getAllIncidentStatus = async () => {
		const data = await incidentStatusService.getAllIncidentStatus();
		setNumOfPages(Math.round(data.length / perPage));
	};
	useEffect(() => {
		getAllIncidentStatus();
	}, []);

	const editIncidentStatus = async (id: number) => {
		setIsModalOpen(true);
		const getIncident = await incidentStatusService.getIncidentStatus(id);
		setIncident(getIncident);
	};
	const deleteIncidentStatus = async (id: number) => {
		await incidentStatusService.deleteIncidentStatus(id);
	};
	const onIncidentEdit = async (incident: IIncidentStatuses) => {
		await incidentStatusService.updateIncidentStatus(incident);
		setIsModalOpen(false);
		setIncident(undefined);
	};
	return (
		<div className={css['page-container']}>
			<table className="table">
				<thead>
					<tr>
						<td>{t('incidentStatus.serialNumber')}</td>
						<td>{t('incidentStatus.name')}</td>
						<td>{t('incidentStatus.edit')}</td>
						<td>{t('incidentStatus.delete')}</td>
					</tr>
				</thead>
				<tbody>
					{incidentStatus.map((incidentStatus) => (
						<tr key={incidentStatus.id}>
							<td>{incidentStatus.serialNumber}</td>
							<td>{incidentStatus.statusName}</td>
							<td>
								<Button
									name={t('button.edit')}
									onClick={() => editIncidentStatus(incidentStatus.id)}
								/>
							</td>
							<td>
								<Button
									name={t('button.delete')}
									onClick={() => deleteIncidentStatus(incidentStatus.id)}
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
					<IncidentStatusForm
						incidentStatus={incident}
						onSave={onIncidentEdit}
					/>
				)}
			</Modal>
		</div>
	);
};

export default IncidentStatusPage;
