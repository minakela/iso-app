import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import incidentService from '../../services/incident/IncidentService';
import IIncident from '../../models/IIncidents';
import Link from '../../common/link/link';
import IsoButton from '../../common/button/isoButton';

const IncidentsPage = () => {
	const { t } = useTranslation('common');
	const [incidents, setIncidents] = useState<IIncident[]>([]);
	const [numOfPages, setNumOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
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

	const getFullName = (firstName: string, lastName: string) =>
		`${firstName} ${lastName}`;

	const editIncident = (id: number) => {};
	const deleteIncident = async (id: number) => {
		const response = await incidentService.deleteIncident(id);
		console.log(response);
	};

	const renderPagination = () => {
		const buttons = [];
		for (let i = 0; i < numOfPages; i++) {
			buttons.push(
				<IsoButton
					key={i}
					name={`${i + 1}`}
					onClick={() => {
						setCurrentPage(i + 1);
					}}
				/>
			);
		}
		return buttons;
	};
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>{t('incident.id')}</th>
						<th>{t('incident.createdBy')}</th>
					</tr>
				</thead>
				<tbody>
					{incidents.map((incident) => (
						<tr key={incident.id}>
							<td>
								<Link to={`/incident/${incident.id}`}>
									{incident.serialNumber}
								</Link>
							</td>
							<td>{incident.description}</td>
							<td>{new Date(incident.reportedDate).getFullYear()}</td>
							<td>
								{getFullName(
									incident.createdBy.firstName,
									incident.createdBy.lastName
								) || 'Unknown User'}
							</td>
							<td>
								{incident.resolvedDate
									? new Date(incident.resolvedDate).getFullYear()
									: 'Not resolved'}
							</td>
							<td>
								<IsoButton
									name="Edit"
									onClick={() => editIncident(incident.id)}
								/>
							</td>
							<td>
								<IsoButton
									name="Delete"
									onClick={() => deleteIncident(incident.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>{renderPagination()}</div>
		</div>
	);
};

export default IncidentsPage;
