import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/london.css';

class JaneKim extends Component {
    render(){
        return(
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
				          <span className="card-title center font"><strong>Jane Kim</strong></span>
				          <div className="row">
				          	<div className="col s4">
				          		<img className="mayor-photo" src="https://asamnews.com/wp-content/uploads/2018/05/jane-kim.jpg" /> 
				          	</div>
				          	<div className="col s8 mayor-info font">
                              <p> <strong >Age: </strong>  40 </p>
                              <p> <strong>Hometown:</strong> New York City </p>
                              <p> <strong>Lived in San Francisco since: </strong> 1999</p>
                              <p> <strong>Education: </strong>  B.A. Stanford, J.D. Berkeley School of Law</p>
                              <p> <strong> Occupation: </strong> San Fancisco Supervisor</p>
                              <p> <strong> Employer: </strong> City and County of San Francisco</p>
				          	</div>
				          </div>

				        </div>
				        <div className="card-action font">
                            <h4> TRANSPORTATION </h4>
				         	<p>Was the lead sponsor of a 2014 Vision Zero resolution to add protected bike lanes, crosswalk signals, education for drivers of large vehicles and other pedestrian safety measures. Supports congestion pricing — charging people to drive on busy streets at certain hours — to raise money for transit improvements.</p>
				         	<h4> HOMELESSNESS </h4> 
                            <p> Would expand Behavioral Health Court, which steers mentally ill people and addicts into assistance programs instead of jail. Proposes 1,500 new shelter beds and increasing stock of affordable and supportive housing through actions including leasing units and crafting quick- to-build modular complexes.</p>
                            <div className="center-align">
					         	<Link to="/londonbreed"><a className="waves-effect btn-large continue">Continue </a></Link>
				         	</div>
				        </div>
				      </div>
				    </div>
				</div>
            </div>
        )
    }
}

export default JaneKim;