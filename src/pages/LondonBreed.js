import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/london.css';

class LondonBreed extends Component {
	render() {
		return (
			<div>
				<div className="candidates">
					<Link to="/londonbreed"><img className='user-photo' /></Link>
					<Link to=""><img className='user-photo' /></Link>
					<Link to="/londonbreed"><img className='user-photo' /></Link>
				</div>

				<div className="row">
				    <div className="col s12 m6 offset-m3">
				      <div className="card white">
				        <div className="card-content white-text">
				          <span className="card-title center">London Breed</span>
				          <div className="row">
				          	<div className="col s4">
				          		<img className="mayor-photo" /> 
				          	</div>
				          	<div className="col s8 mayor-info">
				          		<p><strong>Age:</strong> 40</p>
				          		<p><strong>Hometown:</strong> New York City</p>
				          		<p><strong>Lived in San Francisco since:</strong> 1999</p>
				          		<p><strong>Education:</strong> B.A. Stanford, J.D. Berkeley School of Law</p>
				          		<p><strong>Occupation:</strong> San Francisco Supervisor</p>
				          		<p><strong>Employer:</strong> City and County of San Francisco</p>
				          	</div>
				          </div>

				        </div>
				        <div className="card-action">
				         	<h5>TRANSPORTATION</h5>
				         	<p>Was the lead sponsor of a 2014 Vision Zero resolution to add protected bike lanes, crosswalk signals, education for drivers of large vehicles and other pedestrian safety measures. Supports congestion  pricing  —  charging  people  to  drive  on  busy  streets  at  certain  hours  —  to  raise money for transit improvements.</p>
				         	<h5>HOMELESSNESSWould</h5>
				         	<p>Would  expand  Behavioral  Health  Court,  which  steers  mentally  ill  people  and  addicts  into assistance  programs  instead  of  jail.  Proposes  1,500  new  shelter  beds  and  increasing  stock  of affordable  and  supportive  housing  through  actions  including  leasing  units  and  crafting  quick-to-build modular complexes.</p>
				         	<Link to="/londonbreed"><a class="waves-effect waves-light btn-large">Let's get started</a></Link>
				        </div>
				      </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default LondonBreed;