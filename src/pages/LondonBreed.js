import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/london.css';

class LondonBreed extends Component {
	render() {
		return (
			<div>
				<div className="candidates">
					<Link to="/londonbreed"><img className='user-photo' src="http://sfbayview.com/wp-content/uploads/2015/01/San-Francisco-Board-of-Supervisors-President-London-Breed-0115.jpg"  /></Link>
					<Link to="/janekim"><img className='user-photo' src="https://asamnews.com/wp-content/uploads/2018/05/jane-kim.jpg" /></Link>
					<Link to="/markleonard"><img className='user-photo' src="http://www.latimes.com/resizer/xvzU_cve5BOd7ZWlwkbhb2eoy5U=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HDJJAZDZCBA27DOYQEOANYB25E.jpg" /></Link>
				</div>

				<div className="row">
				    <div className="col s12 m6 offset-m3">
				      <div className="card white">
				        <div className="card-content">
				          <span className="card-title center"><strong>London Breed</strong></span>
				          <div className="row">
				          	<div className="col s4">
				          		<img className="mayor-photo" src="http://sfbayview.com/wp-content/uploads/2015/01/San-Francisco-Board-of-Supervisors-President-London-Breed-0115.jpg" /> 
				          	</div>
				          	<div className="col s8 mayor-info">
				          		<p><strong>Age:</strong> 43</p>
				          		<p><strong>Hometown:</strong> New York City</p>
				          		<p><strong>Lived in San Francisco since:</strong> 1999</p>
				          		<p><strong>Education:</strong> B.A. UC Davis</p>
				          		<p><strong>Occupation:</strong> President, San Francisco Board of Supervisors</p>
				          		<p><strong>Employer:</strong> City and County of San Francisco</p>
				          	</div>
				          </div>

				        </div>
				        <div className="card-action">
				         	<h4>TRANSPORTATION</h4>
				         	<p>Has sponsored Muni nuts-and-bolts legislation as a supervisor, such as expanding and replacing the Metro fleet, reconfiguring seating on N-Judah trains, and expanding morning commute service between Cole Valley and the Embarcadero. Supports a city vehicle licensing fee to raise money for transit. Wants the city to analyze the traffic impacts of ride-hailing companies as a possible prelude to limiting the number of cars they can put on streets.</p>
				         	<h4>HOMELESSNESS</h4>
				         	<p>Promises to eliminate homeless camps from streets within a year by moving occupants into low-cost or supportive housing. Says chronically mentally ill street people should be put into court-ordered conservatorship. Says her administration would build at least 5,000 housing units a year.</p>
				         	<div className="center-align">
					         	<Link to="/londonbreed"><a className="waves-effect btn-large">Let's get started</a></Link>
				         	</div>
				        </div>
				      </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default LondonBreed;