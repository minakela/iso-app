import React, { useEffect, useState } from 'react';
import Input from '../../common/input/Input';
import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import IIncidentForm from './IIncidentForm';
import Button from '../../common/button/button';
import Dropdown from '../../common/dropdown/Dropdown';

const IncidentForm: React.FunctionComponent<IIncidentForm> = ({
	incident,
	onSave,
}) => {
	const [incidentDetails, setIncidentDetails] = useState<IIncidentsDTO>({
		serialNumber: '',
		description: '',
		reportedDate: '',
		resolved: false,
		workPlace: '',
	});

	useEffect(() => {
		setIncidentDetails({
			id: incident.id,
			serialNumber: incident.serialNumber,
			description: incident.description,
			reportedDate: incident.reportedDate,
			reportedBy: incident.reportedBy,
			modifiedBy: incident.modifiedBy,
			createdBy: incident.createdBy,
			acceptedBy: incident.acceptedBy,
			deletedBy: incident.deletedBy,
			isDeleted: incident.isDeleted,
			resolved: incident.resolved,
			resolvedDate: incident.resolvedDate,
			statusId: incident.statusId,
			workPlace: incident.workPlace,
		});
	}, [incident]);
	return (
		<form>
			<Input
				name="Serial number"
				type="text"
				value={incidentDetails?.serialNumber}
				placeholder="Serial Number"
				onChange={(e) =>
					setIncidentDetails({
						...incidentDetails,
						serialNumber: e.target.value,
					})
				}
			/>
			<Input
				name="Description"
				type="text"
				value={incidentDetails?.description}
				placeholder="Description"
				onChange={(e) => {
					debugger;
					setIncidentDetails({
						...incidentDetails,
						description: e.target.value,
					});
				}}
			/>
			<Input
				name="Work place"
				type="text"
				value={incidentDetails?.workPlace}
				placeholder="Work place"
				onChange={(e) => {
					debugger;
					setIncidentDetails({
						...incidentDetails,
						workPlace: e.target.value,
					});
				}}
			/>

			<Button name="Save" onClick={() => onSave(incidentDetails)} />
		</form>
	);
};

export default IncidentForm;
