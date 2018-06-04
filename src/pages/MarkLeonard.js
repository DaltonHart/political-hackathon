import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/london.css';


class MarkLeonard extends Component {
    render(){
        return (
            <div>
               <div className="candidates">
					<Link to="/londonbreed"><img className='user-photo' src="http://sfbayview.com/wp-content/uploads/2015/01/San-Francisco-Board-of-Supervisors-President-London-Breed-0115.jpg" /></Link>
					<Link to="/janekim"><img className='user-photo' src="https://asamnews.com/wp-content/uploads/2018/05/jane-kim.jpg" /></Link>
					<Link to="/markleonard"><img className='user-photo' src="http://www.latimes.com/resizer/xvzU_cve5BOd7ZWlwkbhb2eoy5U=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HDJJAZDZCBA27DOYQEOANYB25E.jpg" /></Link>
				</div>

				<div className="row">
				    <div className="col s12 m6 offset-m3">
				      <div className="card white">
				        <div className="card-content">
				          <span className="card-title center"><strong>Mark Leonard</strong></span>
				          <div className="row">
				          	<div className="col s4">
				          		<img className="mayor-photo" src="http://www.latimes.com/resizer/xvzU_cve5BOd7ZWlwkbhb2eoy5U=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HDJJAZDZCBA27DOYQEOANYB25E.jpg" /> 
				          	</div>
				          	<div className="col s8 mayor-info">
				          		<p><strong>Age:</strong> 66</p>
				          		<p><strong>Hometown:</strong>Milwaukee, WI</p>
				          		<p><strong>Lived in San Francisco since:</strong> 1977</p>
				          		<p><strong>Education:</strong>B.A University of Colorado Boulder</p>
				          		<p><strong>Occupation:</strong>  Small Business Person</p>
				          		<p><strong>Employer:</strong>Self</p>
				          		<Link to='/overview'>over</Link>
				          	</div>
				          </div>

				        </div>
				        <div className="card-action">
				        	<h4> TRANSPORTATION </h4>
				         	<p>Wary of newer alternatives to public transit, taxis and cars, such as ride-hailing services and electric scooters, because they’re private outfits using public infrastructure with little or no compensation to the city. Is skeptical of the bus rapid transit line on Geary Boulevard and says the city should look at building a new subway line instead. Is also pressing the city to enact a vehicle licensing fee to raise money for public transit.</p>
				         	<h4> HOMELESSNESS </h4> 
                            <p>Says he can eliminate street homelessness in two years by quick-starting the creation of 15,000 affordable, workforce and supportive housing units. Would pay for it in part with $100 million from Proposition 63, a 2004 state ballot measure that raised taxes on the richest Californians to improve the state’s mental health system. The measure is tied up in a court fight.</p>
                            <div className="center-align">
					         	<Link to="/londonbreed"><a className="waves-effect btn-large">Let's get started</a></Link>
				         	</div>
				        </div>
				      </div>
				    </div>
				</div>
            </div>
        )
    }
}

export default MarkLeonard;