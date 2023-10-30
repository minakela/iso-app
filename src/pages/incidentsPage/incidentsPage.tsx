import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import incidentService from '../../services/incident/IncidentService';
import IIncident from '../../models/IIncidents';
import Pagination from '../../composite/paginator/paginator';
import css from './incidentsPage.module.css';
import Modal from '../../composite/dialogBox/Modal';
import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import IncidentForm from '../../composite/incidentForm/incidentForm';
import Button from '../../common/button/button';

const IncidentsPage = () => {
	const { t } = useTranslation('common');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [incidents, setIncidents] = useState<IIncident[]>([]);
	const [numOfPages, setNumOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [incident, setIncident] = useState<IIncident>();
	const perPage = 5;
	const getAllIncidentsPerPage = async () => {
		const data = await incidentService.getAllIncidentsPerPage(
			perPage,
			currentPage
		);
		setIncidents(data);
	};

	useEffect(() => {
		getAllIncidentsPerPage();
	}, [currentPage]);

	const getAllIncidents = async () => {
		const data = await incidentService.getAllIncidents();
		setNumOfPages(Math.round(data.length / perPage));
	};

	useEffect(() => {
		getAllIncidents();
	}, []);

	const editIncident = async (id: number) => {
		setIsModalOpen(true);
		const getIncident = await incidentService.getIncident(id);
		setIncident(getIncident);
	};
	const deleteIncident = async (id: number) => {
		await incidentService.deleteIncident(id);
	};

	const onIncidentEdit = async (incident: IIncidentsDTO) => {
		await incidentService.updateIncident(incident);
		setIsModalOpen(false);
		setIncident(undefined);
	};

	return (
		<div className={css['page-container']}>
			<table className="table">
				<thead>
					<tr>
						<th>{t('incident.serialNumber')}</th>
						<th>{t('incident.incident')}</th>
						<th>{t('incident.reportedDate')}</th>
						<th>{t('incident.createdBy')}</th>
						<th>{t('incident.resolvedDate')}</th>
						<th>{t('incident.edit')}</th>
						<th>{t('incident.delete')}</th>
					</tr>
				</thead>
				<tbody>
					{incidents.map((incident) => (
						<tr key={incident.id}>
							<td>{incident.serialNumber}</td>
							<td>{incident.description}</td>
							<td>
								{new Date(incident.reportedDate).toLocaleDateString('en-RS', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</td>
							<td>{incident.modifiedBy}</td>
							<td>
								{incident.resolvedDate
									? new Date(incident.resolvedDate).toLocaleDateString(
											'en-RS',
											{
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											}
									  )
									: 'Not resolved'}
							</td>
							<td>
								<Button
									name={t('button.edit')}
									onClick={() => editIncident(incident.id)}
								/>
							</td>
							<td>
								<Button
									name={t('button.delete')}
									onClick={() => deleteIncident(incident.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={css['pagination-container']}>
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
					<IncidentForm incident={incident} onSave={onIncidentEdit} />
				)}
			</Modal>
		</div>
	);
};

export default IncidentsPage;
