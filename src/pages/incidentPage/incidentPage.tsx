import React, { useEffect, useState } from 'react';
import incidentService from '../../services/incident/IncidentService';
import IIncidents from '../../models/IIncidents';
import { useParams } from 'react-router-dom';

const IncidentsPage = () => {
	const [incident, setIncident] = useState<IIncidents>();
	let { id } = useParams();
	const getIncident = async () => {
		const data = await incidentService.getIncident(id as unknown as number);
		setIncident(data);
	};
	useEffect(() => {
		getIncident();
	}, []);
	return (
		<div>
			<table>
				<tbody>
					<tr key={incident?.id}>
						<td>{incident?.serialNumber}</td>
						<td>{incident?.description}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default IncidentsPage;
