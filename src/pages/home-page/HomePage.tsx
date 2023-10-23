import React from 'react';
import IsoButton from '../../common/button/isoButton';

const HomePage = () => {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h1 className="mb-4 text-center">Incident Reporting System</h1>
					<div className="card mb-4 mt-5">
						<div className="card">
							<div className="card-header">ISO 45001 and related standards</div>
							<div className="card-body">
								According to the International Labour Organization, more than 7
								600 people die from work-related accidents or diseases every
								single day. Thats why an ISO committee of occupational health &
								safety experts set to work to develop an International Standard
								with the potential to save almost three million lives each year.
								Structured in a similar way to other ISO management systems, the
								approach will be familiar to users of standards such as ISO
								14001 or ISO 9001.
							</div>
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
	);
};

export default HomePage;
