import React, {Component} from 'react';

class CandidateOverview extends Component {
	render() {
		return (
			<div>
				<h2 className="center-align">CANDIDATE OVERVIEW</h2>
				<div className="row">
				    <div className="col s12">
				      <div className="card white">
				        <div className="card-content">
				          <div className="row">
				          	<div className="col s2">
				          		<img className="mayor-photo" src="https://asamnews.com/wp-content/uploads/2018/05/jane-kim.jpg" /> 
				          	</div>
				          	<div className="col s8">
				          		<h4><strong>Jane Kim</strong></h4>
				          		<ul>
				          			<li>
				          				• Improve Shelter Access and Medical Care for Homeless Residents <br />
										• Create a Behavioral Health Court to Help Mentally Ill Residents Get
										Care, Not Jail Time <br />
										• Improve Customer Service and Amenities (Wifi, GPS and Data to improve on time service.) <br />
										• Make MUNI Work, Re-Invest in Transit Solutions and Support Bicyclists and Pedestrians
				          			</li>
				          		</ul>
				          	</div>
				          </div>

				        </div>
				      </div>
				    </div>
				</div>
				<div className="row">
				    <div className="col s12">
				      <div className="card white">
				        <div className="card-content">
				          <div className="row">
				          	<div className="col s2">
				          		<img className="mayor-photo" src="http://www.latimes.com/resizer/xvzU_cve5BOd7ZWlwkbhb2eoy5U=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HDJJAZDZCBA27DOYQEOANYB25E.jpg" /> 
				          	</div>
				          	<div className="col s8">
				          		<h4><strong>Mark Leno</strong></h4>
				          		<ul>
				          			<li>
				          				• End street homelessness with housing-first solution target <br />
										• The root causes and direct symptoms of homelessness <br />
										• Strengthen tools that ensure success <br />
										• Implement smart technologies for a cleaner city.
				          			</li>
				          		</ul>
				          	</div>
				          </div>

				        </div>
				      </div>
				    </div>
				</div>
				<div className="row">
				    <div className="col s12">
				      <div className="card white">
				        <div className="card-content">
				          <div className="row">
				          	<div className="col s2">
				          		<img className="mayor-photo" src="http://sfbayview.com/wp-content/uploads/2015/01/San-Francisco-Board-of-Supervisors-President-London-Breed-0115.jpg" /> 
				          	</div>
				          	<div className="col s8">
				          		<h4><strong>London Breed</strong></h4>
				          		<ul>
				          			<li>
				          				• Keep people housed <br />
										• Improve Mental Health & Addiction Treatment and Address Street Behavior. <br />
										• Create Far More Exits to Stable Housing <br />
										• Build Transit-Oriented Housing & Closer Communities and close the Transportation Funding Gap
				          			</li>
				          		</ul>
				          	</div>
				          </div>

				        </div>
				      </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default CandidateOverview;