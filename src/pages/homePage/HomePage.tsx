import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './homeStyle.module.css';
import Button from '../../common/button/button';
import Modal from '../../composite/dialogBox/Modal';
import IncidentForm from '../../composite/incidentForm/incidentForm';
import IIncidentsDTO from '../../models/DTO/IIncidentDTO';
import incidentService from '../../services/incident/IncidentService';

const HomePage = () => {
	const { t } = useTranslation('common');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	function onIncidentCreate(incident: IIncidentsDTO): void {
		incidentService.createIncident(incident);
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h1 className="mb-4 text-center">{t('homePage-h1')}</h1>
					<div className="card mb-4 mt-5">
						<div className="card">
							<div className="card-body">
								<p>{t('homePage-rules.rule1')}</p>
								<p>{t('homePage-rules.rule2')}</p>
								<p>{t('homePage-rules.rule3')}</p>
								<p>{t('homePage-rules.rule4')}</p>
							</div>
							<div className={css['button-container']}>
								<Button
									name={t('button.report')}
									isHidden={false}
									onClick={() => {
										setIsModalOpen(true);
									}}
								/>
								<Button
									name={t('button.review')}
									isHidden={false}
									onClick={() => {}}
								/>
							</div>
						</div>
					</div>
					<Modal
						isOpen={isModalOpen}
						hasCloseBtn={true}
						onClose={() => setIsModalOpen(false)}>
						<div className={css['modal-content']}>
							<IncidentForm onSave={onIncidentCreate} />
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
