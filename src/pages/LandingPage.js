import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/landingPage.css';

class LandingPage extends Component {
	render() {
		return (
			 <div className="container">
		        <div className="row">
		          <div className="col s6">
		            <div className="homePageInfo">
		            	<h2>Get to know your candidates</h2>
		            	<p>Researching politics can be dauting and confusing...</p>
		            	<p>Here's what you need to know.</p>
		            	<Link to="/londonbreed"><a class="waves-effect waves-light btn-large">Let's get started</a></Link>
		            </div>
		          </div>
		          <div className="col s6">
		            <img className="loadingImg" src="https://www.stagenewyork.com/wp-content/uploads/2017/12/IM_Photo5.0.jpg" />
		          </div>
		        </div>
		    </div>
		);
	}
}

export default LandingPage;