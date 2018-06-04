import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class JaneKim extends Component {
    render(){
        return(
            <div>
               <div className="candidates">
					<Link to="/londonbreed"><img className='user-photo' /></Link>
					<Link to="/janekim"><img className='user-photo' /></Link>
					<Link to="/londonbreed"><img className='user-photo' /></Link>
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
				          		Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.
				          	</div>
				          </div>

				        </div>
				        <div className="card-action">
				         	<p>Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>
				        </div>
				      </div>
				    </div>
				</div>
            </div>
        )
    }
}

export default JaneKim;