import React, { useEffect, useState } from 'react';
import Input from '../../common/input/Input';
import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import IIncidentForm from './IIncidentForm';
import Button from '../../common/button/button';
import Dropdown from '../../common/dropdown/Dropdown';
import workPlaceService from '../../services/workPlace/WorkPlaceService';
import IWorkPlace from '../../models/IWorkPlace';

const IncidentForm: React.FunctionComponent<IIncidentForm> = ({
	incident,
	onSave,
}) => {
	const [workplaceOptions, setWorkplaceOptions] = useState<IWorkPlace[]>([]);
	const getAllWorkPlaces = async () => {
		const data = await workPlaceService.getAllWorkPlaces();
		setWorkplaceOptions(data);
	};

	useEffect(() => {
		getAllWorkPlaces();
	}, []);

	const [incidentDetails, setIncidentDetails] = useState<IIncidentsDTO>({
		serialNumber: '',
		description: '',
		reportedDate: '',
		resolved: false,
		workPlace: '',
		statusId: 1,
		createdBy: Number(localStorage.getItem('user')),
	});

	useEffect(() => {
		if (incident) {
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
		}
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
					setIncidentDetails({
						...incidentDetails,
						description: e.target.value,
					});
				}}
			/>
			<Dropdown
				label="Workplace"
				value={incidentDetails?.workPlace}
				onChange={(value) =>
					setIncidentDetails({
						...incidentDetails,
						workPlace: value,
					})
				}
				options={workplaceOptions.map((workplace) => ({
					value: workplace.label,
					label: workplace.value,
				}))}
			/>
			<Button name="Save" onClick={() => onSave(incidentDetails)} />
		</form>
	);
};

export default IncidentForm;
