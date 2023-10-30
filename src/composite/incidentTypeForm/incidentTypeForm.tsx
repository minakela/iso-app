import React, { useEffect, useState } from 'react';
import Input from '../../common/input/Input';
import Button from '../../common/button/button';
import IIncidentTypeForm from './IIncidentTypeForm';
import IIncidentTypes from '../../models/IIncidentTypes';

const IncidentTypeForm: React.FunctionComponent<IIncidentTypeForm> = ({
	incidentType,
	onSave,
}) => {
	const [incidentTypeDetails, setIncidentTypeDetails] =
		useState<IIncidentTypes>({
			id: 0,
			serialNumber: '',
			name: '',
			modifiedBy: 0,
			createdBy: 0,
			deletedBy: 0,
			isDeleted: false,
		});

	useEffect(() => {
		setIncidentTypeDetails({
			id: incidentType.id,
			serialNumber: incidentType.serialNumber,
			name: incidentType.name,
			modifiedBy: incidentType.modifiedBy,
			createdBy: incidentType.createdBy,
			deletedBy: incidentType.deletedBy,
			isDeleted: incidentType.isDeleted,
		});
	}, [incidentType]);

	return (
		<form>
			<Input
				name="Serial number"
				type="text"
				value={incidentTypeDetails?.serialNumber}
				placeholder="Serial Number"
				onChange={(e) =>
					setIncidentTypeDetails({
						...incidentTypeDetails,
						serialNumber: e.target.value,
					})
				}
			/>
			<Input
				name="Name"
				type="text"
				value={incidentTypeDetails?.name}
				placeholder="Name"
				onChange={(e) =>
					setIncidentTypeDetails({
						...incidentTypeDetails,
						name: e.target.value,
					})
				}
			/>

			<Button name="Save" onClick={() => onSave(incidentTypeDetails)} />
		</form>
	);
};

export default IncidentTypeForm;
