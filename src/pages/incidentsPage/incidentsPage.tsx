import React, { useEffect, useState } from 'react';
import incidentService from '../../services/incident/IncidentService';
import IIncident from '../../models/IIncidents';
import { Link } from 'react-router-dom';

const IncidentsPage = () => {
	const [incidents, setIncidents] = useState<IIncident[]>([]);

	const getAllIncidents = async () => {
		const data = await incidentService.getAllIncidents();
		setIncidents(data);
	};
	useEffect(() => {
		getAllIncidents();
	}, []);
	return (
		<div>
			<table>
				<tbody>
					{incidents.map((incident) => (
						<tr key={incident.id}>
							<td>
								<Link to={`/incident/${incident.id}`}>{incident.id}</Link>
							</td>
							<td>{incident.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default IncidentsPage;
