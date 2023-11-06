import React, { useEffect, useState } from 'react';
import Input from '../../common/input/Input';
import Button from '../../common/button/button';
import IIncidentStatusForm from './IIncidentStatusForm';
import IIncidentStatuses from '../../models/IIncidentStatuses';

const IncidentStatusForm: React.FunctionComponent<IIncidentStatusForm> = ({
	incidentStatus,
	onSave,
}) => {
	const [incidentStatusDetails, setIncidentStatusDetails] =
		useState<IIncidentStatuses>({
			id: 0,
			serialNumber: 0,
			statusName: '',
			modifiedBy: 0,
			createdBy: 0,
			deletedBy: 0,
			isDeleted: false,
		});

	useEffect(() => {
		setIncidentStatusDetails({
			id: incidentStatus.id,
			serialNumber: incidentStatus.serialNumber,
			statusName: incidentStatus.statusName,
			modifiedBy: incidentStatus.modifiedBy,
			createdBy: incidentStatus.createdBy,
			deletedBy: incidentStatus.deletedBy,
			isDeleted: incidentStatus.isDeleted,
		});
	}, [incidentStatus]);

	return (
		<form>
			<Input
				name="Serial number"
				type="text"
				value={incidentStatusDetails?.serialNumber}
				placeholder="Serial Number"
				onChange={(e) =>
					setIncidentStatusDetails({
						...incidentStatusDetails,
						serialNumber: e.target.value,
					})
				}
			/>
			<Input
				name="Status name"
				type="text"
				value={incidentStatusDetails?.statusName}
				placeholder="Status name"
				onChange={(e) =>
					setIncidentStatusDetails({
						...incidentStatusDetails,
						statusName: e.target.value,
					})
				}
			/>
			<Button name="Save" onClick={() => onSave(incidentStatusDetails)} />
		</form>
	);
};

export default IncidentStatusForm;
