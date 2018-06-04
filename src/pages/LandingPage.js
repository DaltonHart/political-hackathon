import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/landingPage.css';
import flag from '../styles/flag.png'
class LandingPage extends Component {
	render() {
		return (
			<div className="background">
			 <div className="container">
		        <div className="row">
		          <div className="col s6">
		            <div className="homePageInfo">
		            	<h2>Get that chunk of info you need!</h2>
		            	<p>Researching politics is
						daunting and confusing... Here’s everything you need
						to know about the candidates.</p>
		            	
		            	<Link to="/londonbreed"><a class="waves-effect waves-light light-blue darken-4 btn-large">Let's get started</a></Link>
		            </div>
		          </div>
		          <div className="col s6">
		            <img className="loadingImg" src={flag} />
		          </div>
		        </div>
		    </div>
		    </div>
		);
	}
}

export default LandingPage;