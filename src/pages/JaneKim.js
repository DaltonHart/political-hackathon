import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class JaneKim extends Component {
    render(){
        return(
            <div>
               <div className="candidates">
					<Link to="/londonbreed"><img className='user-photo' /></Link>
					<Link to="/janekim"><img className='user-photo' /></Link>
					<Link to="/markleonard"><img className='user-photo' /></Link>
				</div>

				<div className="row">
				    <div className="col s12 m6 offset-m3">
				      <div className="card blue-grey darken-1">
				        <div className="card-content white-text">
				          <span className="card-title center">Jane Kim</span>
				          <div className="row">
				          	<div className="col s4">
				          		<img className="mayor-photo" /> 
				          	</div>
				          	<div className="col s8 mayor-info">
                              < p > < strong >Age: </strong>  40 </p >
                              <p> <strong>Hometown:</strong> New York City </p>
                              <p> <strong>Lived in San Francisco since: </strong> 1999</p>
                              <p> <strong>Education: </strong>  B.A. Stanford, J.D. Berkeley School of Law</p>
                              <p> <strong> Occupation: </strong> San Fancisco Supervisor</p>
                              <p> <strong> Employer: </strong> City and County of San Francisco</p>
				          	</div>
				          </div>

				        </div>
				        <div className="card-action">
                            <h4> TRANSPORTATION </h4>
				         	<p>Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>
				        </div>
                        <div> 
                            <h4> HOMELESSNESS </h4> 
                            <p> Would  expand  Behavioral  Health  Court,  which  steers  mentally  ill  people  and  addicts  into assistance  programs  instead  of  jail.  Proposes  1,500  new  shelter  beds  and  increasing  stock  of affordable  and  supportive  housing  through  actions  including  leasing  units  and  crafting  quick-to-build modular complexes</p>
                        </div> 
				      </div>
				    </div>
				</div>
            </div>
        )
    }
}

export default JaneKim;