import React from 'react';
import IsoButton from '../../common/button/isoButton';
import { useTranslation } from 'react-i18next';

const homePageStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
const HomePage = () => {
	const { t } = useTranslation('common');
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h1 className="mb-4 text-center">{t('test')}</h1>
					<div className="card mb-4 mt-5">
						<div className="card" style={homePageStyle}>
							<div className="card-body">
								According to the International Labour Organization, more than 7
								600 people die from work-related accidents or diseases every
								single day. Thats why an ISO committee of occupational health &
								safety experts set to work to develop an International Standard
								with the potential to save almost three million lives each year.
							</div>
							<div style={homePageStyle}>
								<IsoButton
									name="Report an accident"
									isHidden={false}
									onClick={() => {
										console.log('Report an accident');
									}}
								/>
								<IsoButton
									name="Review as admin"
									isHidden={false}
									onClick={() => {
										console.log('Review as admin');
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
